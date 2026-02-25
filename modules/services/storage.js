//chave 
const CHAVE_STORAGE = "historicoTransacoes";

//funcao para salvar os dados em json
export function salvarDados(dados) {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(dados));
}

//funcao para buscar os dados e retornar em objeto js
export function buscarDados() {
    const temp = localStorage.getItem(CHAVE_STORAGE);
    if (temp)
        return JSON.parse(temp);
    return [];
}