// 1. Concatenação de Arrays
const cidadesBrasileiras = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília', 'Recife'];
const cidadesEstrangeiras = ['Nova York', 'Paris', 'Tóquio', 'Londres', 'Roma'];
const todasCidades = cidadesBrasileiras.concat(cidadesEstrangeiras);

console.log('1. Concatenação de Arrays:');
console.log('Cidades Brasileiras:', cidadesBrasileiras);
console.log('Cidades Estrangeiras:', cidadesEstrangeiras);
console.log('Lista completa de cidades:', todasCidades);
console.log('----------------------------------------');

// 2. Removendo e Substituindo Elementos com Splice
let animais = ["elefante", "girafa", "pinguim", "tubarão", "coruja", "macaco", "urso", "leão"];

console.log('2. Removendo e Substituindo Elementos com Splice:');
console.log("Animais em ordem inicial:");
console.log(animais);

// Usando splice para substituir 2 elementos a partir do índice 2
animais.splice(2, 2, "urso", "leão");

console.log("Animais após ordem ser trocada:");
console.log(animais);
console.log('----------------------------------------');

// 3. Verificando Condição com Estruturas de Controle
let numeros = [10, 20, 30, 40, 60, 70, 80, 25, 55, 90];
let contador = 0;

console.log('3. Verificando Condição com Estruturas de Controle:');
console.log("1o - Array inicial de números:");
console.log(numeros);

console.log("2o - Verificando se há números maiores que 50...");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 50) {
        console.log(`Número ${numeros[i]} é maior que 50.`);
        contador++;
    }
}

if (contador > 0) {
    console.log(`3o - O array possui ${contador} número(s) maior(es) que 50.`);
} else {
    console.log("3o - O array não possui números maiores que 50.");
}
console.log('----------------------------------------');

// 4. Somando Valores com um Loop for
let numerosFor = [10, 20, 30, 40, 50, 7, 13, 25, 42, 55];
let somaFor = 0;

console.log('4. Somando Valores com um Loop for:');
console.log("1o - Array inicial de números:");
console.log(numerosFor);

console.log("2o - Somando os números do array...");
for (let i = 0; i < numerosFor.length; i++) {
    console.log(`Adicionando o número ${numerosFor[i]} à soma.`);
    somaFor += numerosFor[i];
}

console.log("3o - Resultado da soma:");
console.log(`A soma de todos os números do array é: ${somaFor}`);
console.log('----------------------------------------');

// 5. Somando Valores com um Loop while
let numerosWhile = [10, 20, 30, 40, 50, 7, 13, 25, 42, 55, 8, 17, 33, 60, 72];
let somaWhile = 0;
let i = 0;

console.log('5. Somando Valores com um Loop while:');
console.log("1o - Array inicial de números:");
console.log(numerosWhile);

console.log("2o - Somando os números do array...");
while (i < numerosWhile.length) {
    console.log(`${somaWhile} + ${numerosWhile[i]} = ${somaWhile + numerosWhile[i]}`);
    somaWhile += numerosWhile[i];
    i++;
}

console.log("3o - Resultado da soma:");
console.log(`A soma de todos os números do array é: ${somaWhile}`);