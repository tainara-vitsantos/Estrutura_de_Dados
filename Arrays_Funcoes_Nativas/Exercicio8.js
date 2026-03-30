/* Na escala de plantão, "Daniel" ficou doente e "Diego" vai cobrir o turno dele
exatamente na mesma posição da lista. Usando apenas uma função,
remova "Daniel" e insira "Diego" no mesmo índice. */

const escala = ['Carlos', 'Daniel', 'Eduardo', 'Felipe'];

escala.splice(1, 1, 'Diego');

console.log(escala);
