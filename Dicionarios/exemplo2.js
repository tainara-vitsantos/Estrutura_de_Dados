//USANDO Object

const dicionario = {};

dicionario["nome"] = "Carlos";
dicionario[42] = "Número";

//Acesso
console.log(dicionario["nome"]); //Saída: Carlos
console.log(dicionario["42"]); //Saída: Número (chaves numericas convertidas para string)

//Iteração
for (const chave in dicionario){
    console.log(`${chave} : ${dicionario[chave]}`);
}


const mapa = new Map();
mapa.set("nome", "Carlos");
mapa.set(42, "Número");

//Acesso
console.log(mapa.get("nome")); //Carlos
console.log(mapa.get(42)); //Número

//Iteração
for(const[chave, valor]of mapa){
    console.log(`${chave} : ${valor}`);
}