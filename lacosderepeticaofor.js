const readline = require('readline-sync');
// biblioteca do codigo
//

let pares = 0, impares = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(readline.question(`Digite o ${i}º número: `));
  if (num % 2 === 0) pares++;
  else impares++;
}

console.log(`\nTotal de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);
