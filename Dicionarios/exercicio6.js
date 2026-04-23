/* 6) Use um Map para criar um contador de frequência de letras em uma
string, diferenciando letras maiúsculas e minúsculas. */


function contarLetras(texto) {
    const mapa = new Map();

    for (let char of texto) {
        // Ignora espaços (opcional)
        if (char === " ") continue;

        if (mapa.has(char)) {
            mapa.set(char, mapa.get(char) + 1);
        } else {
            mapa.set(char, 1);
        }
    }

    return mapa;
}

// Exemplo de uso
const texto = "AaBbAac";
const resultado = contarLetras(texto);

console.log(resultado);
