/* 
1) Algoritmos de Busca e Otimização

Implementar Busca por Interpolação
para encontrar o índice de um código.

Comentário Teórico:
A Busca por Interpolação estima onde o valor procurado
provavelmente está usando proporção entre os valores,
em vez de sempre dividir ao meio como a Busca Binária.
Em arrays uniformemente distribuídos ela reduz comparações
e pode atingir desempenho próximo de O(log log n).
*/

class BuscaInterpolacao {

    static buscar(
        array,
        codigoProcurado
    ) {

        let inicio = 0;

        let fim =
            array.length - 1;

        while (

            inicio <= fim &&

            codigoProcurado >=
            array[inicio]

            &&

            codigoProcurado <=
            array[fim]

        ) {

            if (
                inicio === fim
            ) {

                return array[inicio]
                    === codigoProcurado
                    ? inicio
                    : -1;
            }

            let posicao =

                inicio +

                Math.floor(

                    (
                        (
                            codigoProcurado
                            -
                            array[inicio]
                        )

                        *

                        (
                            fim
                            -
                            inicio
                        )

                    )

                    /

                    (
                        array[fim]
                        -
                        array[inicio]
                    )

                );

            if (

                array[posicao]

                ===

                codigoProcurado

            ) {

                return posicao;
            }

            if (

                array[posicao]

                <

                codigoProcurado

            ) {

                inicio =
                    posicao + 1;

            }

            else {

                fim =
                    posicao - 1;
            }
        }

        return -1;
    }
}

// ======================
// TESTE
// ======================

const codigos = [

100,
200,
300,
400,
500,
600,
700,
800,
900,
1000

];

const codigo =
    700;

const indice =

BuscaInterpolacao.buscar(
    codigos,
    codigo
);

if (
    indice !== -1
) {

console.log(
`Código ${codigo} encontrado no índice ${indice}`
);

}

else {

console.log(
"Código não encontrado"
);

}