var resultados = [];

function calcular() {
    var inicio = parseInt(document.getElementById('inicio').value);
    var fim = parseInt(document.getElementById('ifim').value);
    var passo = parseInt(document.getElementById('ipasso').value);

    var resultadoDiv = document.getElementById('resultadoDiv'); // Seleciona a div de resultados

    if (inicio <= fim && passo > 0) {
        var resultados = [];
        for (var i = inicio; i <= fim; i += passo) {
            resultados.push("😃"+i);
        }
        resultadoDiv.textContent = "Resultados: " + resultados.join(', ');
    } else {
        resultadoDiv.textContent = "Valores inválidos.";
    }
}
