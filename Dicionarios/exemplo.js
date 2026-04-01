/* Um dicionário permite armazenar dados de forma associativa, onde uma
chave é usada para acessar um valor correspondente. */

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


// Iterar passar um por um...
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


//Validando e trabalhando com chaves

const dicionari = {fruta : "maça"};
 
if("fruta" in dicionari){
    console.log("Chave encontrada!");
}else{
    console.log("Chave não encontrada!");
}

const dados = {nome : "Carlos"};

if(!(idade in dados)){
    dados["idade"] = 28;
}

console.log(dados); // Saida: {nome: "Carlos" , idade: 28}


/* Embora objetos sejam amplamente usados, a classe Map oferece
vantagens, como suporte a qualquer tipo de chave. */

const mapa = new Map();

//Adicionando pares chave-valor
mapa.set("nome", "Ana");
mapa.set("idade", 30);

//obtendo valores
console.log(mapa.get("nome")); //Saída : Ana

// Verificando se uma chave existe
console.log(mapa.has("idade")); //Saída : true

//Removendo ma chave
mapa.delete("idade");
console.log(mapa.has("idade")); //Saída: false

//Iterando com a class MAP
const mapA = new Map([
    ["chave1", "valor1"],
    ["chave2", "valor2"]
]);

//Iterando com for...of
for(const[chave, valor]of mapA){
    console.log(`${chave} : ${valor}`);
}

/* Map fornece métodos convenientes para operações comuns,
como:

➢ set → Adicionar ou atualizar uma chave.

➢ get → Obter o valor associado a uma chave.

➢ delete → Remover uma chave.

➢ clear → Remover todos os itens. */


/* Use Object
– Quando as chaves são strings ou símbolos.
– Para estruturas de dados simples ou com pouca manipulação de chaves.
– Quando não for necessária a ordem de inserção das chaves.

• Use Map
– Quando as chaves podem ser de qualquer tipo.
– Para garantir a ordem de inserção.
– Quando precisa de operações frequentes de inserção e remoção em grandes
conjuntos de dados.
– Para evitar colisões de nomes com as propriedades herdadas de objetos
(toString, hasOwnProperty). */