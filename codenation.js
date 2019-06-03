var requestURL = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=51504c327b3f44927c9f12fa7536e4b620c28f08"

var frase = "";
var resumo = "";
var saidaJSON;

function converter() {

    fetch(requestURL)
        .then(res => res.json())
        .then((saidaJSON) => {
            let numero_casas = saidaJSON.numero_casas;
            let caracteresFrase = [];
            caracteresFrase = saidaJSON.cifrado;

            for (var i = 0; i < caracteresFrase.length; i++) {
                var codigoDosCaracteres = caracteresFrase.charCodeAt(i)

                if (codigoDosCaracteres == 32 || codigoDosCaracteres == 33) {
                    frase += (String.fromCharCode(codigoDosCaracteres))
            } else {
                    frase += (String.fromCharCode(codigoDosCaracteres - numero_casas))
                }

            }
            console.log(frase)
        }).catch(err => console.error(err));
}