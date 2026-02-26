export function formatarValor(valor: number): string {
    const valorFormatado = valor.toLocaleString('pt-PT', {
        style: 'currency',
        currency: 'EUR',
    });
    return valorFormatado;
}