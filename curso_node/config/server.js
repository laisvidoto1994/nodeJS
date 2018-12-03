var express = require('express');

var aplicacao = express();

aplicacao.set('view engine', 'ejs');


module.exports = aplicacao;