var app = require('./config/server');
var menssagem = require('./mod_teste');

var app2 = menssagem();

app.get("/", function (requisicao, resposta) {
    resposta.render("./secao/home");
});

app.get("/tecnologia", function (requisicao, resposta) {
    resposta.render("./secao/tecnologia");
});

app.listen(3000, function () {
    console.log("servidor rodando com express");
    console.log(app2);
});