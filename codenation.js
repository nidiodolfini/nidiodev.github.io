var requestURL  = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=51504c327b3f44927c9f12fa7536e4b620c28f08"

var frase = "";
let teste = JSON.stringify(requestURL);


console.log(teste)

function converter() {
  
    fetch('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=51504c327b3f44927c9f12fa7536e4b620c28f08')
    .then(res => res.json())
    .then((out) => {
        //console.log(out.numero_casas);
        //console.log(out.token);
        //console.log(out.cifrado);
        //console.log(out.cifrado.charCodeAt(0))
        let b = [];
        b = out.cifrado;

        let a = String.fromCharCode((out.cifrado.charCodeAt(0)-1));

        //console.log(b.length);
       for (var i = 0; i < b.length; i++ ){
           var code = b.charCodeAt(i)

           if(code == 32 || code == 33){
            frase+= (String.fromCharCode(code))
           } else{
            frase+= (String.fromCharCode(code-1))
           }
           


           //console.log( "letra " +  String.fromCharCode(code))
           //console.log("charcode " + code)
       }
       console.log(frase)
        
       /* console.log(a);
        console.log(out.resumo_criptografico);*/
}).catch(err => console.error(err));
}

