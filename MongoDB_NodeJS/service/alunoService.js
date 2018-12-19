//CRUD do mongo

//incluindo o modulo do node que faz connecção com o mongo (drive do mongo)
var MongoConnection = require('../mongoConnection')

// metodo construtor da classe
function AlunoService() {

}

// salvar o registro da tabela de alunos
AlunoService.save = function (aluno, callback) {
    var mongoConnection = new MongoConnection().open(function (err, db) {
        //atualização de dados do aluno
        if (aluno._id != null && aluno._id != "") {
            aluno._id = MongoConnection.getObjectID(aluno._id) //converte o _id em ObjectId
            db.collection('alunos').updateOne({ "_id": aluno._id }, aluno, function (err, result) {
                console.log(err)
                callback(err, result)
                db.close()
            })
        }
        // inserir dados no banco
        else {
            delete aluno._id //remove o _id para não inserir no documento um valor null no banco
            db.collection('alunos').insertOne(aluno, function (err, result) {
                aluno._id = result.insertedId; // retorna o _id que foi criado pelo mongo   
                callback(err, result)
                db.close()
            })
        }
    })
}

// listar dos os registros da tabela de alunos
AlunoService.list = function (callback) {
    var mongoConnection = new MongoConnection().open(function (err, db) {
        db.collection('alunos').find({}).toArray(function (err, result) {
            callback(err, result)
            db.close()
        })
    })
}

// exclui o registro da tabela de alunos
AlunoService.delete = function (aluno, callback) {
    var objectId = MongoConnection.getObjectID(aluno._id)
    var mongoConnection = new MongoConnection().open(function (err, db) {
        db.collection('alunos').deleteOne({ _id: objectId }, function (err, result) {
            callback(err, result)
            db.close()
        })
    })
}

// procura o registro da tabela de alunos
AlunoService.find = function (search, callback) {
    var mongoConnection = new MongoConnection().open(function (err, db) {
        db.collection('alunos').find(search).toArray(function (err, result) {
            callback(err, result)
            db.close()
        })
    })
}

AlunoService.findById = function (id, callback) {

    var objectId = MongoConnection.getObjectID(id)
    var mongoConnection = new MongoConnection().open(function (err, db) {
        db.collection('alunos').find({ _id: objectId }).toArray(function (err, result) {
            callback(err, result)
            db.close()
        })
    })
}

//deixando o modulo disponivel para que todos possam acesar-lo
module.exports = AlunoService

