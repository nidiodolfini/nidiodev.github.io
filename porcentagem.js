

function converter() {
    let inputValor = document.getElementById("valor");
    let inputPorcentagem = document.getElementById("porcentagem");

    let valor = (inputValor.value * inputPorcentagem.value) /100;
    let somaValores = (parseInt(valor) + parseInt(inputValor.value))
     
    console.log(somaValores)
        let resultado = (valor).toLocaleString('pt-BR')
        let valorTotal = (somaValores).toLocaleString('pt-BR')
        document.getElementById("resultado").innerHTML = resultado;
        document.getElementById("valorTotal").innerHTML = valorTotal;
    
}