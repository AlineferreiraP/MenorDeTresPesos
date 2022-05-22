// achando o menor peso em um vetor 

var pesos = [];

// laço para inserir os pesos 

for (var i = 0; i < 3; i++){
  pesos[i] = prompt ('Insira a série de pesos em Kg:   ');
}
console.log('Os pesos são: ' + pesos);

// laço para achar o menor peso 

var menorNum = pesos[0];

//laço para achar o menor peso
for (var i = 0; i < pesos.length; i++) {
    if (menorNum > pesos[i]) {
      menorNum = pesos[i];
    }
   // laço para achar posição
  var posicao = pesos.indexOf(menorNum);
  

   }

 




console.log(' Menor peso: ' + menorNum + 'KG está na posição ' + posicao )
