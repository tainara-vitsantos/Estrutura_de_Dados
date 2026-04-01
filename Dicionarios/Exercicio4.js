/* Crie uma função que receba um dicionário 
e remova todas as chaves cujo valor seja null ou undefined. */

function removerObjeto(objeto) {
    for (let chave in objeto) {
        if (objeto[chave] === null || objeto[chave] === undefined) {
            delete objeto[chave];
        }
    }
    return objeto;
}

// Exemplo de uso
const dados = {
    nome: "João",
    idade: null,
    email: undefined,
    cidade: "São Paulo"
};

console.log(removerObjeto(dados));