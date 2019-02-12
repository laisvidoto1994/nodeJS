// framework nodeJS para aplicações Web.
const express = require('express');

const app = express();

var porta = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

// controllers 
require('./controllers/HotelController')(app);

console.log("Rodando...");

app.listen(porta);