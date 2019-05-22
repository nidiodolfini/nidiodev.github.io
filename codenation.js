
var requestURL = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=51504c327b3f44927c9f12fa7536e4b620c28f08"

var frase = "";
var resumo = "";
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
