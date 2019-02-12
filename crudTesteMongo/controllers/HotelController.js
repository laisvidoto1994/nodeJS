'use strict';

const express = require('express');

const mongoose = require('../database/db');

const hotelConsulta = require('../models/hotel');// models com á extrutura dos dados do banco

const router = express.Router();

const hotelResposta = require('../models/hotel');

// rota de requisição get
router.get('/buscar', async (req, res) => {
    const dados = await hotelResposta.find();
    console.log(dados);
    res.status(200).send({dados});
});

router.post('/register', async (req, res) => {

    const user = await hotelResposta.create(req.body);
    return res.status(200).send({ user });

});

// postman-> http://localhost:3000/v1/hotel/buscar
module.exports = app => app.use('/v1/hotel', router);