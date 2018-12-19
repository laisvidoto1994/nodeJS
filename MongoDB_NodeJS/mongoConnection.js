// https://www.youtube.com/watch?v=a3Hg4qTquFA

//incluindo o modulo do node que faz connecção com o mongo (drive do mongo)
var mongoClient = require("mongodb").MongoClient
var ObjectID = require("mongodb").ObjectID

// metodo construtor da classe
function MongoConnection() {
    this.servidor = "localhost"
    this.porta = 27017
    this.banco = "mycustomers"
}

//montando url de connecção com o banco do mongobd

MongoConnection.prototype.url = function () {
    //mongodb://localhost:27017/olimpiada
    return "mongodb://" + this.servidor + ":" + this.porta + "/" + this.banco
}

//abrindo connecção com o banco do mongo
MongoConnection.prototype.open = function (callback) {
    mongoClient.connect(this.url(), function (err, db) {
        callback(err, db)
    })
}

// retorna á chave interna da tabela que é gerado automaticamente pelo mongo
MongoConnection.getObjectID = function (id) {
    return new ObjectID(id)
}

//deixando o modulo disponivel para que todos possam acesar-lo
module.exports = MongoConnection;
















