let display = document.getElementById('display');
let valorAtual = '';
let operacaoPendente = '';
let valorAnterior = '';

function adicionarNumero(numero) {
    valorAtual += numero;
    atualizarDisplay();
}

function adicionarDecimal() {
    if (!valorAtual.includes('.')) {
        valorAtual += '.';
        atualizarDisplay();
    }
}

function realizarOperacao(operacao) {
    if (valorAtual !== '') {
        if (valorAnterior !== '') {
            calcularResultado();
        }
        operacaoPendente = operacao;
        valorAnterior = valorAtual;
        valorAtual = '';
    }
}

function calcularResultado() {
    if (valorAtual !== '' && valorAnterior !== '') {
        switch (operacaoPendente) {
            case '+':
                valorAtual = (parseFloat(valorAnterior) + parseFloat(valorAtual)).toString();
                break;
            case '-':
                valorAtual = (parseFloat(valorAnterior) - parseFloat(valorAtual)).toString();
                break;
            case '*':
                valorAtual = (parseFloat(valorAnterior) * parseFloat(valorAtual)).toString();
                break;
            case '/':
                if (parseFloat(valorAtual) !== 0) {
                    valorAtual = (parseFloat(valorAnterior) / parseFloat(valorAtual)).toString();
                } else {
                    valorAtual = 'Erro';
                }
                break;
        }
        operacaoPendente = '';
        valorAnterior = '';
        atualizarDisplay();
    }
}

function limpar() {
    valorAtual = '';
    operacaoPendente = '';
    valorAnterior = '';
    atualizarDisplay();
}

function apagar() {
    valorAtual = valorAtual.slice(0, -1);
    atualizarDisplay();
}

function atualizarDisplay() {
    display.value = valorAtual;
}
