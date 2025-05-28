const readline = require('readline');

// Criar interface para entrada de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Vetor com 10 números inteiros (não ordenados e não repetidos)
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Exibe o vetor com os índices
console.log("Índices:");
for (let i = 0; i < vetor.length; i++) {
  process.stdout.write(i + " ");
}
console.log("\nValores:");
for (let i = 0; i < vetor.length; i++) {
  process.stdout.write(vetor[i] + " ");
}
console.log("\n");

// Solicita o número a ser pesquisado
rl.question("Digite o número que você deseja encontrar: ", entrada => {
  const numero = parseInt(entrada);
  let encontrado = false;

  // Percorre o vetor para encontrar o número
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      console.log(`\nO número ${numero} está localizado na posição: ${i}`);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log(`\nO número ${numero} não foi encontrado!`);
  }

  rl.close();
});
