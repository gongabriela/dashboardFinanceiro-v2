import { buscarDados, salvarDados } from "../services/storage.js";
import { renderizarListaTransacoes } from "../dom/dom.js";

const listaTransacoes = document.querySelector('.lista-transacoes') as HTMLUListElement;

function carregarExtrato() {
    const dados = buscarDados();
    renderizarListaTransacoes(dados); 
}

function removerTransacao(event: Event) {
    const transacaoAlvo = event.target as HTMLElement;
    const transacaoClicada = transacaoAlvo.closest('.btn-lixeira');
    if (!transacaoClicada) return;
    const idClicado = Number((transacaoClicada as HTMLElement).dataset.id);
    const dadosAtuais = buscarDados();

    const dadosAtualizados = dadosAtuais.filter(transacao => transacao.id !== idClicado);

    salvarDados(dadosAtualizados);
    renderizarListaTransacoes(dadosAtualizados);
}

carregarExtrato(); 
listaTransacoes.addEventListener('click', removerTransacao); 