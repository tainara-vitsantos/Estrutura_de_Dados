/* 5) Crie uma função que receba uma frase e use um Map para contar quantas
vezes cada palavra aparece. */



function contarPalavras(frase) {
    const mapa = new Map();

    // Remove pontuação básica e coloca tudo em minúsculo
    const palavras = frase
        .toLowerCase()
        .replace(/[.,!?;:]/g, "")
        .split(" ");

    for (let palavra of palavras) {
        if (mapa.has(palavra)) {
            mapa.set(palavra, mapa.get(palavra) + 1);
        } else {
            mapa.set(palavra, 1);
        }
    }

    return mapa;
}

// Exemplo de uso
const frase = "O gato e o cachorro e o gato";
const resultado = contarPalavras(frase);

console.log(resultado);



