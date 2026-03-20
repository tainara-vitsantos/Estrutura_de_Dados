/* Crie um objeto para armazenar informações de alunos, onde a chave é o
número de matrícula e o valor é o nome do aluno. Adicione pelo menos 3
alunos ao dicionário e exiba os nomes iterando sobre as chaves. */


// Criando o objeto para armazenar os alunos (Chave: Matrícula, Valor: Nome)
const alunos = {
    "202301": "Ana Silva",
    "202302": "Bruno Oliveira",
    "202303": "Carla Souza"
};

// Adicionando mais um aluno de forma dinâmica (opcional)
alunos["202304"] = "Diego Santos";

// Exibindo os nomes iterando sobre as chaves
console.log("Lista de Alunos:");

for (const matricula in alunos) {
    // A cada iteração, 'matricula' é a chave
    // alunos[matricula] acessa o valor (nome do aluno)
    console.log(`Matrícula: ${matricula} - Nome: ${alunos[matricula]}`);
}
/*  For: “Vou olhar um por um todos os números da caixinha”

E para cada número você fala:

🗣️ “Esse número aqui pertence a quem?”

E o programa responde mostrando:
Matrícula: 202301 - Nome: Ana Silva
Matrícula: 202302 - Nome: Bruno Oliveira
Matrícula: 202303 - Nome: Carla Souza
Matrícula: 202304 - Nome: Diego Santos */