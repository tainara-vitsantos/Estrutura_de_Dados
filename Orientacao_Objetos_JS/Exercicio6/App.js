import Endereco from "./Endereco.js";
import Cliente from "./Cliente.js";

const endereco = new Endereco(
    "Rua Caetano Velozo",
    271,
    "São Paulo",
    "SP"
);

const cliente = new Cliente("Josue Souza", endereco);

cliente.exibirDados();