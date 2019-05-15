let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"

function converter(){
    let input = document.getElementById("valor");
    let valor = input.value;
    fetch(url).then((resposta)=>{
        return resposta.json()
    }).then((data)=>{
        let rate = data.rates.BRL;
        let resultado = `${(valor).toLocaleString('dollar')} USD =  R$ ${(rate * valor).toLocaleString('pt-BR')}`
        document.getElementById("resultado").innerHTML = resultado;
    })
}