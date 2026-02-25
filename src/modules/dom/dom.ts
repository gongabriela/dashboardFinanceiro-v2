import { formatarValor } from "../utils/formatters.js";

export function atualizarCartoes(totalBalanco, totalRenda, totalDespesa) {
    const elementoBalanco = document.getElementById('valor-balanco');
    const elementoRenda = document.getElementById('valor-renda');
    const elementoDespesa = document.getElementById('valor-despesa');

    elementoBalanco.textContent = totalBalanco;
    elementoRenda.textContent = totalRenda;
    elementoDespesa.textContent = totalDespesa;
}

const listaTransacoes = document.querySelector('.lista-transacoes');

export function renderizarListaTransacoes(dados) {
    //limpar lista
    listaTransacoes.innerHTML = "";
    //forEach elemento de dados
    dados.forEach(transacao => {
        //criar bloco html
        const blocoTransacao = criarBlocoTransacao(transacao);
        //inserir li no ul (lista transacoes)
        listaTransacoes.appendChild(blocoTransacao);
    });
}

function criarBlocoTransacao(transacao) {
    //criar li - item da lista transacoes
    const li = document.createElement('li');
    li.classList.add('item-transacao');

    //div  info do item
    const divInfo = document.createElement('div');
    divInfo.classList.add('info-transacao');

    //span do icone de lixeira
    const lixeira = document.createElement('button');
    lixeira.classList.add('btn-lixeira', 'estilo-neon');
    lixeira.dataset.id = transacao.id;
    const iconLixeira = document.createElement('i');
    iconLixeira.classList.add('fa-solid', 'fa-trash');

    //div nome da transacao 
    const divNome = document.createElement('div');
    divNome.classList.add('nome-transacao');
    divNome.textContent = transacao.descricao;

    //div categoria da transacao
    const divCategoria = document.createElement('div');
    divCategoria.classList.add('categoria-transacao');
    if (transacao.tipo === "receita") {
        divCategoria.classList.add('receita');
        divCategoria.textContent = "Receita";
    } else {
        divCategoria.classList.add('despesa');
        divCategoria.textContent = "Despesa";
    }

    //div data da transacao
    const divData = document.createElement('div');
    divData.classList.add('data-transacao');
    divData.textContent = transacao.data;

    //div valor da transacao
    const divValor = document.createElement('div');
    divValor.classList.add('valor-transacao');
    divValor.textContent = formatarValor(transacao.valor);

    //adicionar divs ao li
    lixeira.appendChild(iconLixeira);
    divInfo.appendChild(lixeira);
    divInfo.appendChild(divNome);
    li.appendChild(divInfo);
    li.appendChild(divCategoria);
    li.appendChild(divData);
    li.appendChild(divValor);

    return li;
}

export function atualizarDataCabecalho() {
    const elementoData = document.querySelector('.calendario');
    const hoje = new Date();
    const opcoes = { day: 'numeric', month: 'short', year: 'numeric' };
    const dataFormatada = hoje.toLocaleDateString('pt-PT', opcoes);
    elementoData.textContent = dataFormatada; 
}
