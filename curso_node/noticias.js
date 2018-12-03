//console.log("Criando site de noticias com NodeJS");

//incorporando o http para o arquivo
var http = require('http');

// criando um servidor
var server = http.createServer(
    function (requisicao, resposta) {

        // descobre qual á url que á requisicao esta sendo passada
        var categoria = requisicao.url;

        //url é http://localhost:3000/tecnologia
        if (categoria == "/tecnologia") {
            resposta.end("<html><body>Noticias de Tecnologia</body></html>");
        }
        else if (categoria == "/moda") {
            resposta.end("<html><body>Noticias de Moda</body></html>");
        }
        else if (categoria == "/beleza") {
            resposta.end("<html><body>Noticias de Beleza</body></html>");
        }
        else {
            resposta.end("<html><body>Portal de Noticias</body></html>");
        }
    }
);

// acessando servidor pela porta 3000
server.listen(3000);

// só abrir o promt de comando, navegar até á pasta com esse arquivo de noticiais.js
// e escrever: node noticiais.js
// abrir o chromme http://localhost:3000/ 
// e aparecerá o html Portal de Noticias 
