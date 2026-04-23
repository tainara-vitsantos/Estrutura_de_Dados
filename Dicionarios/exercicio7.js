/* 7) Implemente uma função que converta um object para um Map e outra
que faça o caminho inverso, convertendo um Map para um object. */


// Função para converter um object para um Map
function objectToMap(obj) {
    const mapa = new Map(); 
    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) { // Verifica se a chave é do próprio objeto
            mapa.set(chave, obj[chave]); // Adiciona a chave e o valor ao Map
        }
    }
    return mapa;
}

// Função para converter um Map para um object
function mapToObject(mapa) {
    const obj = {};
    for (let [chave, valor] of mapa) { // Itera sobre cada par chave-valor do Map
        obj[chave] = valor; // Adiciona a chave e o valor ao objeto
    }   
    return obj;
}

// Exemplo de uso
const meuObjeto = {
    nome: "Alice",
    idade: 30,
    cidade: "Rio de Janeiro"
};
const meuMapa = objectToMap(meuObjeto);
console.log(meuMapa);
const novoObjeto = mapToObject(meuMapa);
console.log(novoObjeto);

