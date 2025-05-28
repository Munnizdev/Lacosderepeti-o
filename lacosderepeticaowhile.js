const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let menores21 = 0;
let maiores50 = 0;

function perguntar() {
  readline.question('Digite uma idade: ', idade => {
    idade = parseInt(idade);

// simula um laço de repetição, funcionando como um while

    
    if (idade < 0) {
      console.log(`\nTotal de pessoas menores de 21 anos: ${menores21}`);
      console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`);
      readline.close();
    } else {
      if (idade < 21) menores21++;
      if (idade > 50) maiores50++;
      perguntar(); // chama novamente
    }
  });
}

perguntar();
