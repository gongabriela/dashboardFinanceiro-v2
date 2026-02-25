export function formatarValor(valor) {
    const valorFormatado = valor.toLocaleString('pt-PT', {
        style: 'currency',
        currency: 'EUR',
    });
    return valorFormatado;
}