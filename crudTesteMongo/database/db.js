const mongoose = require('mongoose');
const rules = require('../config/rules.json');// destinação do arquivo db que criamos

// conecção com o banco de dados e com a estrutura do arquivo hotel.js
//mongoose.connect(rules.bdConnect , { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/tableHotel', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;