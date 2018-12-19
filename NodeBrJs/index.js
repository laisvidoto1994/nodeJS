// exemplo https://cursos.nodebr.org/courses/448292/lectures/6939052

const util = require('util');

const obterEnderrecoAync = util.promisify(obterEnderreco);

function obterUsuario() {
    //quando der erro -> reject(erro)
    //quando sucesso-> resolve
    return new Promise(function resolverPromisse(resolve, reject) {

        setTimeout(function () {
            //  return reject(new Error('deu meda de verdade'))
            return resolve({
                id: 1,
                nome: "lais",
                dataNascimentos: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {

    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(() => {
            return resolve({
                numero: '1122558899',
                ddd: 11
            })
        }, 2000);
    })
}

function obterEnderreco(idUsuario) {

    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: 'leandro barreto',
                numero: 355
            })
        }, 3000);
    })
}

main();

async function main() {

    try {

        const usuario = await obterUsuario();

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderreco(usuario.id)
        ]);

        const telefone = resultado[0];
        const enderreco = resultado[1];

        console.log(`
        Nome: ${usuario.nome} 
        Enderreço: ${enderreco.rua}, ${enderreco.numero} 
        Telefone: (${telefone.ddd}) ${telefone.numero}
        `);
    } catch (error) {
        console.error("erro", error);
    }
}

