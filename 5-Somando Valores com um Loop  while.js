// Array com vários números inteiros (agora com mais números)
let numeros = [10, 20, 30, 40, 50, 7, 13, 25, 42, 55, 8, 17, 33, 60, 72];

// Variável para armazenar a soma dos números
let soma = 0;

// Variável para controlar o índice do array no loop while
let i = 0;

// Exibindo o array inicial no console
console.log("1o - Array inicial de números:");
console.log(numeros);

// Usando um loop while para somar todos os números do array
console.log("2o - Somando os números do array...");
while (i < numeros.length) {
    console.log(`${soma} + ${numeros[i]} = ${soma + numeros[i]}`); // Exibe a equação matemática
    soma += numeros[i]; // Adiciona o número atual à soma
    i++; // Incrementa o índice para passar para o próximo número
}

// Exibindo o resultado final da soma no console
console.log("3o - Resultado da soma:");
console.log(`A soma de todos os números do array é: ${soma}`);