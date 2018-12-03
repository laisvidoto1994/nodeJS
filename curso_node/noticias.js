//console.log("Criando site de noticias com NodeJS");

//incorporando o http para o arquivo
var http = require('http');

// criando um servidor
var server = http.createServer(
    function(requisicao, resposta){
        resposta.end("<html><body>Portal de Noticias</body></html>");
    }  
);

// acessando servidor pela porta 3000
server.listen(3000);

// só abrir o promt de comando, navegar até á pasta com esse arquivo de noticiais.js
// e escrever: node noticiais.js
// abrir o chromme http://localhost:3000/ 
// e aparecerá o html Portal de Noticias 