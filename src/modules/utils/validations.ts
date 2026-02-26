const erroDescricao = document.querySelector('.erro-descricao') as HTMLElement;
const erroQuantidade = document.querySelector('.erro-quantidade') as HTMLElement;
const erroData = document.querySelector('.erro-data') as HTMLElement;

export function validarTransacao(descricao: string, valor: string, data: string) {
    if (validarDescricao(descricao) && validarValor(valor) && validarData(data))
        return true;
    return false;
}

function validarData(data: string) {
 if (data === '') {
        erroData.textContent = 'A data não pode estar vazia.';
        return false;
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataTransacao = new Date(data);
    dataTransacao.setHours(0, 0, 0, 0);

    if (dataTransacao > hoje) {
        erroData.textContent = 'A data não pode ser futura.';
        return false;
    }
    erroData.textContent = '';
    return true;
}

function validarDescricao(descricao: string) {
    if (descricao.trim() === '') {
        erroDescricao.textContent = 'A descrição não pode estar vazia.';
        return false;
    }
    else if (descricao.length > 25) {
        erroDescricao.textContent = 'A descrição deve conter no máximo 25 caracteres.';
        return false;
    }
    erroDescricao.textContent = '';
    return true;
}

function validarValor(valor: string) {
    if (valor === '') {
        erroQuantidade.textContent = 'O valor não pode estar vazio.';
        return false;
    }
    else if (Number(valor) <= 0) {
        erroQuantidade.textContent = 'O valor deve ser maior que zero.';
        return false;
    }
    else if (Number(valor) > 1000000000) {
        erroQuantidade.textContent = 'O valor deve ser menor que 1 bilhão.';
        return false;
    }
    erroQuantidade.textContent = '';
    return true;
}