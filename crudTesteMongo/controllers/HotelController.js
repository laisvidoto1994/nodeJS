'use strict';

const express = require('express');

// Models
const hotelResposta = require('../models/hotel');// models com á extrutura dos dados do banco

//Rota
const router = express.Router();

/**
 * rota de requisição get
 * postman-> http://localhost:3000/v1/hotel/buscar
 */
router.get('/buscar', async (req, res) => {
    const retornoDado = await hotelResposta.find();
    res.status(200).send({ retornoDado });
});

/**
 * rota de requisição get
 * postman->http://localhost:3000/v1/hotel/register
 *  parametros-> {
        "nome": "hotel Mar Hotel",
        "responsavel":"Mercia Cristina",
        "contato": "mercia@marhotel.com",
        "custo": "R$ 2.000,00",
        "animais":"sim"
    }  
 */
router.post('/register', async (req, res) => {
    const retornoDado = await hotelResposta.create(req.body);
    return res.status(200).send({ retornoDado });
});

/**
 * rota de requisição put
 * postman->http://localhost:3000/v1/hotel/atualizar
 */
router.put('/atualizar/:id', async (req, res) => {

    var query = { _id: req.params.id };

    hotelResposta.findByIdAndUpdate({ query }, req.body).then(function () {
        hotelResposta.findOne({ _id: req.params.id })
            .then(function (update) {
                res.send(update);
            });
    });
});


/**
 * rota de requisição delete
 * postman->http://localhost:3000/v1/hotel/excluir
 */
router.delete('/excluir/:id', async (req, res) => {
    var query = { _id: req.params.id };
    hotelResposta.findByIdAndRemove({ query }, function (err, result) {
        if (err) {
            return res.send(err);
        } else {
            res.send({ message: 'Deleted' });
            //res.send({ result });
        }
    });
});

// postman-> http://localhost:3000/v1/hotel/tipoDeRequisicao
module.exports = app => app.use('/v1/hotel', router);