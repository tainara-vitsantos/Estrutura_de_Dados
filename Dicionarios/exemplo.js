/* Dicionários são usados para representar respostas de APIs e armazenar
dados recebidos do servidor.*/

const apiResponse = {
    status: "success",
    data: {
        id: 1,
        nome: "Produto A",
        preco: 100
    }
};

console.log(apiResponse.data.nome); // Saída: Produto A

// Criando um dicionário com um objeto
const dicionario = {
    nome: "João",
    idade: 25,
    profissao: "Engenheiro"
};

console.log(dicionario.nome);      // Saída: João
console.log(dicionario["idade"]);  // Saída: 25

// Nome é uma chave
// Joao é um valor
// E pode ser armazenado qualquer tipo de dado

//json -> Java Script Object Notation


// Chaves podem ser adicionadas dinamicamente ou removidas.
const dcionario = {};

// Adicionando chaves e valores
dicionario["cor"] = "azul";
dicionario.tamanho = "grande";

console.log(dicionario); // Saída: { cor: 'azul', tamanho: 'grande' }

// Removendo uma chave
delete dicionario["cor"];
console.log(dicionario); // Saída: { tamanho: 'grande' }


// Iterar passar um por um 
//ITERANDO SOBRE UM DICIONÁRIO

const dicionario = {
    fruta: "maçã",
    cor: "vermelho",
    preco: 5
};

// Usando for...in
for (const chave in dicionario) {
    console.log(`${chave}: ${dicionario[chave]}`);
}

//MÉTODOS PARA TRABALHAR COM DICIONÁRIOS
const dicionario = {
    nome: "João",
    idade: 25,
    cidade: "Barra Bonita"
};

// Obter todas as chaves
console.log(Object.keys(dicionario)); // Saída: ["nome", "idade", "cidade"]

// Obter todos os valores
console.log(Object.values(dicionario)); // Saída: ["João", 25, "Barra Bonita"]

// Iterar sobre entradas (chave e valor)
Object.entries(dicionario).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});