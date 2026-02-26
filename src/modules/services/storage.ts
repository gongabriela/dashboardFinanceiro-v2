import { type ITransacao } from "../models/Transacao.js";

const CHAVE_STORAGE = "historicoTransacoes";

export function salvarDados(dados: ITransacao[]) {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(dados));
}

export function buscarDados(): ITransacao[] {
    const temp = localStorage.getItem(CHAVE_STORAGE);
    if (temp)
        return JSON.parse(temp);
    return [];
}