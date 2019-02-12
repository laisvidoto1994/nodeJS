const mongoose = require('../database/db');

// criando estrutura de como os dados serão salvos
const hotelSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },

    responsavel: {
        type: String, 
    },

    contato: {
        type: String, 
    },

    custo: {
        type: String, 
    },

    animais: {
        type: String, 
    }
});

module.exports = mongoose.model('hotel', hotelSchema);
