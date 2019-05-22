/*
var requestURL = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=51504c327b3f44927c9f12fa7536e4b620c28f08"

var frase = "";
var resumo = "";
let teste = JSON.stringify(requestURL);

console.log(teste)
var out;
function converter() {

    fetch(requestURL)
        .then(res => res.json())
        .then((out) => {
            let numero_casas = out.numero_casas;
            console.log(numero_casas)
            let b = [];
            b = out.cifrado;

            for (var i = 0; i < b.length; i++) {
                var code = b.charCodeAt(i)

                if (code == 32 || code == 33) {
                    frase += (String.fromCharCode(code))
                    //resumo += (String)
                } else {
                    frase += (String.fromCharCode(code - numero_casas))
                }

            }
            console.log(frase)


        }).catch(err => console.error(err));
        
}
*/
/*
var xhr = new XMLHttpRequest();
var url = "https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=51504c327b3f44927c9f12fa7536e4b620c28f08";
xhr.open("POST", url, true);
xhr.setRequestHeader("content-type", "multipart/form-data")
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        
    }
};*/
var data = JSON.stringify({
            "numero_casas": 1,
            "token": "51504c327b3f44927c9f12fa7536e4b620c28f08",
            "cifrado": "ifz! ju dpnqjmft! tijq ju! volopxo",
            "decifrado": "hey! it compiles! ship it! unknown",
            "resumo_criptografico": "756e22eb3291739e3be8f2beac0e1820d1f1854d"});

            
            //xhr.send(data);
