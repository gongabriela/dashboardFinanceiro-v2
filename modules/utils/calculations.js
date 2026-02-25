// Calcular renda total (apenas receitas)
export function calcularRendaTotal(dados) {
    return dados.reduce((total, transacao) => {
        if (transacao.tipo === "receita") {
            return total + transacao.valor;
        }
        return total;
    }, 0);
}

// Calcular total de despesas (apenas despesas)
export function calcularDespesaTotal(dados) {
    return dados.reduce((total, transacao) => {
        if (transacao.tipo === "despesa") {
            return total + transacao.valor;
        }
        return total; 
    }, 0);
}

// Calcular balanço total (renda - despesa)
export function calcularBalancoTotal(dados) {
    const rendaTotal = calcularRendaTotal(dados);
    const despesaTotal = calcularDespesaTotal(dados);
    
    return rendaTotal - despesaTotal;
}