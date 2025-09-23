// A função de soma original
function somar() {
    let valor1String = document.getElementById('valor1').value;
    let valor2String = document.getElementById('valor2').value;
    let valor1 = parseFloat(valor1String);
    let valor2 = parseFloat(valor2String);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }
    let resultadoSoma = valor1 + valor2;
    document.getElementById('resultado').innerHTML = "O resultado da soma é: " + resultadoSoma;
}

// -----------------------------------------------------------------------------
// Esta é a nova função para calcular a proporção percentual.
// -----------------------------------------------------------------------------
function calcularProporcao() {
    // 1. OBTER E CONVERTER OS VALORES DOS CAMPOS
    let valor1String = document.getElementById('valor1').value;
    let valor2String = document.getElementById('valor2').value;

    let valor1 = parseFloat(valor1String);
    let valor2 = parseFloat(valor2String);

    // 2. VALIDAR OS DADOS E EVITAR ERROS
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, digite valores numéricos válidos.");
        return;
    }

    if (valor2 === 0) {
        alert("Não é possível calcular a proporção com o segundo valor (Y) igual a zero.");
        return;
    }

    // 3. REALIZAR O CÁLCULO
    // A fórmula para "X é % de Y" é (X / Y) * 100.
    let resultadoProporcao = (valor1 / valor2) * 100;

    // Arredonda o resultado para duas casas decimais para uma melhor visualização.
    let resultadoFormatado = resultadoProporcao.toFixed(2);

    // 4. EXIBIR O RESULTADO NO ELEMENTO H2
    document.getElementById('resultado').innerHTML = `${valor1} é **${resultadoFormatado}%** de ${valor2}.`;
}