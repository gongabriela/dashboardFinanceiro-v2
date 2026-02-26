import { salvarDados, buscarDados } from "./modules/services/storage.js";
import { calcularRendaTotal, calcularDespesaTotal, calcularBalancoTotal } from "./modules/utils/calculations.js";
import { formatarValor } from "./modules/utils/formatters.js";
import { atualizarCartoes, renderizarListaTransacoes, atualizarDataCabecalho } from "./modules/dom/dom.js";
import { validarTransacao } from "./modules/utils/validations.js";
import { Transacao, type ITransacao } from "./modules/models/Transacao.js";


const dadosIniciais = buscarDados();
const inputDescricao = document.getElementById('descricao') as HTMLInputElement;
const inputValor = document.getElementById('quantidade') as HTMLInputElement;
const inputTipo = document.getElementById('tipo-transacao') as HTMLSelectElement;
const inputData = document.getElementById('data') as HTMLInputElement;
const btnAdicionar = document.querySelector('.adiciona-historia') as HTMLButtonElement;
const listaTransacoes = document.querySelector('.lista-transacoes') as HTMLUListElement;

function criarDadoTransacao() {

    const descricaoDigitada = inputDescricao.value;
    const valorDigitado = inputValor.value;
    const tipoSelecionado = inputTipo.value;
    const dataSelecionada = inputData.value;
    
    if (!validarTransacao(descricaoDigitada, valorDigitado, dataSelecionada)) {return null; }

    const novaTransacao = {
        id: Date.now(),
        descricao: descricaoDigitada,
        valor: parseFloat(valorDigitado),
        tipo: tipoSelecionado,
        data: new Date(dataSelecionada).toLocaleDateString()
    };
    
    return novaTransacao;
}

function atualizarDashboard(dados: ITransacao[]) {
    const rendaTotal = formatarValor(calcularRendaTotal(dados));
    const despesaTotal = formatarValor(calcularDespesaTotal(dados));
    const balancoTotal = formatarValor(calcularBalancoTotal(dados));
    atualizarCartoes(balancoTotal, rendaTotal, despesaTotal);
    const dadosUltimosSeteDias = filtrarUltimosSeteDias(dados);
    renderizarListaTransacoes(dadosUltimosSeteDias);
}

function processarNovaTransacao () {
    const novaTransacao = criarDadoTransacao();
    if (!novaTransacao) { return; }
    const dadosAtuais = buscarDados();
    dadosAtuais.push(novaTransacao);
    salvarDados(dadosAtuais);

    inputDescricao.value = '';
    inputValor.value = '';

    atualizarDashboard(dadosAtuais);
}

function removerTransacao(event: Event) {
const elementoAlvo = event.target as HTMLElement;
const transacaoClicada = elementoAlvo.closest('.btn-lixeira');
    if (!transacaoClicada) return;
    const idClicado = Number((transacaoClicada as HTMLElement).dataset.id);
    const dados = buscarDados();

    const dadosAtualizados = dados.filter((transacao: ITransacao) => {
        return transacao.id !== idClicado;
    });

    salvarDados(dadosAtualizados);
    atualizarDashboard(dadosAtualizados);
}

function filtrarUltimosSeteDias(dados: ITransacao[]) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const seteDiasAtras = new Date();
    seteDiasAtras.setDate(hoje.getDate() - 7);
    seteDiasAtras.setHours(0, 0, 0, 0);

    return dados.filter((transacao: ITransacao) => {
        const [dia, mes, ano] = transacao.data.split('/').map(Number);
        if (dia === undefined || mes === undefined || ano === undefined) {
            return false;
        }
        const dataTransacao = new Date(ano, mes - 1, dia);
        dataTransacao.setHours(0, 0, 0, 0);
        
        return dataTransacao >= seteDiasAtras && dataTransacao <= hoje;
    });
}


atualizarDashboard(dadosIniciais);
atualizarDataCabecalho();
btnAdicionar.addEventListener('click', processarNovaTransacao);
listaTransacoes.addEventListener('click', removerTransacao);