const Sorter = require('./Sorter.js');
const Buscas = require('./Buscas.js');

// --- CONFIGURAÇÃO DO BENCHMARK ---
// Conforme a instrução II: vetor com 500.000 elementos
const TAMANHO_VETOR = 500000; 

console.log(`[1/3] Gerando vetor inicial com ${TAMANHO_VETOR} elementos...`);

// 1. Geração dos primeiros 499.999 números aleatórios
let vetor = Array.from({ length: TAMANHO_VETOR - 1 }, () => 
  Math.floor(Math.random() * (TAMANHO_VETOR * 10))
);

// INSTRUÇÃO III: Colocar seu nome (convertido em ID numérico estável) como o ÚLTIMO item inserido
// "Tainara Vitoria" convertido para uma assinatura numérica única para o teste de busca
const assinaturaNomeFiltrado = 713141181; // Representação numérica estável de "Tainara"
vetor.push(assinaturaNomeFiltrado); 

// O valor procurado nas buscas será obrigatoriamente a sua assinatura/nome inserido
const valor_procurado = assinaturaNomeFiltrado;

console.log("-> Tamanho final do Vetor:", vetor.length);
console.log("-> Último item inserido (Assinatura/Nome):", valor_procurado);

// Objetos para armazenar os tempos de cada rodada (T1 a T10)
const temposOrdenacao = { "Bubble Sort": [], "Quick Sort": [], "Merge Sort": [] };
const temposBuscaBubble = { "Sequencial": [], "Binária": [], "Interpolação": [] };
const temposBuscaQuick  = { "Sequencial": [], "Binária": [], "Interpolação": [] };
const temposBuscaMerge  = { "Sequencial": [], "Binária": [], "Interpolação": [] };

console.log("\n[2/3] Iniciando a bateria de 10 testes (T1 a T10)...");
console.log("Aguarde, processando estruturas em segundo plano...\n");

// Laço para executar o experimento 10 vezes seguidas
for (let t = 1; t <= 10; t++) {
  process.stdout.write(`Executando rodada T${t}... `);

  // Criando cópias novas do vetor desordenado original para cada algoritmo
  const vBubble = [...vetor];
  const vQuick  = [...vetor];
  const vMerge  = [...vetor];

  // --- 1. ORDENAÇÃO ---
  // Bubble Sort
  let inicio = performance.now();
  const ordenadoBubble = Sorter.bubbleSort(vBubble);
  temposOrdenacao["Bubble Sort"].push(performance.now() - inicio);

  // Quick Sort
  inicio = performance.now();
  const ordenadoQuick = Sorter.quickSort(vQuick);
  temposOrdenacao["Quick Sort"].push(performance.now() - inicio);

  // Merge Sort
  inicio = performance.now();
  const ordenadoMerge = Sorter.mergeSort(vMerge);
  temposOrdenacao["Merge Sort"].push(performance.now() - inicio);


  // --- 2. BUSCAS (Cenário: Ordenado por Bubble Sort) ---
  inicio = performance.now();
  Buscas.sequencial(ordenadoBubble, valor_procurado);
  temposBuscaBubble["Sequencial"].push(performance.now() - inicio);

  inicio = performance.now();
  Buscas.binaria(ordenadoBubble, valor_procurado);
  temposBuscaBubble["Binária"].push(performance.now() - inicio);

  inicio = performance.now();
  Buscas.interpolacao(ordenadoBubble, valor_procurado);
  temposBuscaBubble["Interpolação"].push(performance.now() - inicio);


  // --- 3. BUSCAS (Cenário: Ordenado por Quick Sort) ---
  inicio = performance.now();
  Buscas.sequencial(ordenadoQuick, valor_procurado);
  temposBuscaQuick["Sequencial"].push(performance.now() - inicio);

  inicio = performance.now();
  Buscas.binaria(ordenadoQuick, valor_procurado);
  temposBuscaQuick["Binária"].push(performance.now() - inicio);

  inicio = performance.now();
  Buscas.interpolacao(ordenadoQuick, valor_procurado);
  temposBuscaQuick["Interpolação"].push(performance.now() - inicio);


  // --- 4. BUSCAS (Cenário: Ordenado por Merge Sort) ---
  inicio = performance.now();
  Buscas.sequencial(ordenadoMerge, valor_procurado);
  temposBuscaMerge["Sequencial"].push(performance.now() - inicio);

  inicio = performance.now();
  Buscas.binaria(ordenadoMerge, valor_procurado);
  temposBuscaMerge["Binária"].push(performance.now() - inicio);

  inicio = performance.now();
  Buscas.interpolacao(ordenadoMerge, valor_procurado);
  temposBuscaMerge["Interpolação"].push(performance.now() - inicio);

  console.log("✔ OK");
}

// --- FUNÇÃO AUXILIAR PARA FORMATAR AS TABELAS ---
function gerarLinhaTabela(objetoTempos, chave) {
  const arr = objetoTempos[chave];
  const soma = arr.reduce((a, b) => a + b, 0);
  const media = soma / arr.length;

  return {
    "ALGORITMO": chave,
    "T1 (ms)": arr[0].toFixed(2),
    "T2 (ms)": arr[1].toFixed(2),
    "T3 (ms)": arr[2].toFixed(2),
    "T4 (ms)": arr[3].toFixed(2),
    "T5 (ms)": arr[4].toFixed(2),
    "T6 (ms)": arr[5].toFixed(2),
    "T7 (ms)": arr[6].toFixed(2),
    "T8 (ms)": arr[7].toFixed(2),
    "T9 (ms)": arr[8].toFixed(2),
    "T10 (ms)": arr[9].toFixed(2),
    "Média (ms)": media.toFixed(3)
  };
}

console.log("\n[3/3] Bateria concluída! Renderizando tabelas de desempenho:\n");

// --- TABELA 1: ORDENAÇÃO ---
console.log("=======================================================================================");
console.log("1) BENCHMARK DOS ALGORITMOS DE ORDENAÇÃO");
console.log("=======================================================================================");
const tabelaOrdenacao = [
  gerarLinhaTabela(temposOrdenacao, "Bubble Sort"),
  gerarLinhaTabela(temposOrdenacao, "Quick Sort"),
  gerarLinhaTabela(temposOrdenacao, "Merge Sort")
];
console.table(tabelaOrdenacao, ["ALGORITMO", "T1 (ms)", "T2 (ms)", "T3 (ms)", "T4 (ms)", "T5 (ms)", "T6 (ms)", "T7 (ms)", "T8 (ms)", "T9 (ms)", "T10 (ms)", "Média (ms)"]);

// --- TABELA 2: BUSCA (BUBBLE) ---
console.log("\n=======================================================================================");
console.log("2) BENCHMARK DOS ALGORITMOS DE BUSCA - ORDENADO POR BUBBLE SORT");
console.log("=======================================================================================");
const tabelaBuscaBubble = [
  gerarLinhaTabela(temposBuscaBubble, "Sequencial"),
  gerarLinhaTabela(temposBuscaBubble, "Binária"),
  gerarLinhaTabela(temposBuscaBubble, "Interpolação")
];
console.table(tabelaBuscaBubble, ["ALGORITMO", "T1 (ms)", "T2 (ms)", "T3 (ms)", "T4 (ms)", "T5 (ms)", "T6 (ms)", "T7 (ms)", "T8 (ms)", "T9 (ms)", "T10 (ms)", "Média (ms)"]);

// --- TABELA 3: BUSCA (QUICK) ---
console.log("\n=======================================================================================");
console.log("3) BENCHMARK DOS ALGORITMOS DE BUSCA - ORDENADO POR QUICK SORT");
console.log("=======================================================================================");
const tabelaBuscaQuick = [
  gerarLinhaTabela(temposBuscaQuick, "Sequencial"),
  gerarLinhaTabela(temposBuscaQuick, "Binária"),
  gerarLinhaTabela(temposBuscaQuick, "Interpolação")
];
console.table(tabelaBuscaQuick, ["ALGORITMO", "T1 (ms)", "T2 (ms)", "T3 (ms)", "T4 (ms)", "T5 (ms)", "T6 (ms)", "T7 (ms)", "T8 (ms)", "T9 (ms)", "T10 (ms)", "Média (ms)"]);

// --- TABELA 4: BUSCA (MERGE) ---
console.log("\n=======================================================================================");
console.log("4) BENCHMARK DOS ALGORITMOS DE BUSCA - ORDENADO POR MERGE SORT");
console.log("=======================================================================================");
const tabelaBuscaMerge = [
  gerarLinhaTabela(temposBuscaMerge, "Sequencial"),
  gerarLinhaTabela(temposBuscaMerge, "Binária"),
  gerarLinhaTabela(temposBuscaMerge, "Interpolação")
];
console.table(tabelaBuscaMerge, ["ALGORITMO", "T1 (ms)", "T2 (ms)", "T3 (ms)", "T4 (ms)", "T5 (ms)", "T6 (ms)", "T7 (ms)", "T8 (ms)", "T9 (ms)", "T10 (ms)", "Média (ms)"]);