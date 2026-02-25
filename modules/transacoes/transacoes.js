import { buscarDados, salvarDados } from "../services/storage.js";
import { renderizarListaTransacoes } from "../dom/dom.js";

const listaTransacoes = document.querySelector('.lista-transacoes');

function carregarExtrato() {
    const dados = buscarDados();
    renderizarListaTransacoes(dados); 
}

function removerTransacao(event) {
    const transacaoClicada = event.target.closest('.btn-lixeira');
    if (!transacaoClicada) return;
    const idClicado = Number(transacaoClicada.dataset.id);
    const dadosAtuais = buscarDados();

    const dadosAtualizados = dadosAtuais.filter(transacao => transacao.id !== idClicado);

    salvarDados(dadosAtualizados);
    renderizarListaTransacoes(dadosAtualizados);
}

carregarExtrato(); 
listaTransacoes.addEventListener('click', removerTransacao); 