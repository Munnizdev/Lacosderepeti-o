const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(mensagem) {
  return new Promise(resolve => {
    rl.question(mensagem, resposta => {
      const numero = Number(resposta.trim()); // Usa Number em vez de parseInt
      if (isNaN(numero)) {
        console.log('Por favor, digite um número válido.');
        resolve(null);
      } else {
        resolve(numero);
      }
    });
  });
}

async function main() {
  let soma = 0;
  let numero;

  do {
    numero = await perguntar('Digite um número: ');
    if (numero === null) continue;
    if (numero > 0) soma += numero;
  } while (numero !== 0);

  console.log(`\nA soma dos números positivos é: ${soma}
