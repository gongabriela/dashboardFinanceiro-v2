export interface ITransacao {
    id: number;
    descricao: string;
    valor: number;
    tipo: "receita" | "despesa";
    data: string;
}

export class Transacao implements ITransacao {
    readonly id: number;
    readonly data: string;

    descricao: string;
    valor: number;
    tipo: "receita" | "despesa";

    constructor(descricao: string, valor: number, tipo: "receita" | "despesa", data: string) {
        this.id = Date.now();
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
        this.data = data;
    }
}