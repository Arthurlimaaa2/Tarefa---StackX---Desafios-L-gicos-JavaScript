// Array com vários números inteiros, incluindo números que não terminam com 0
let numeros = [10, 20, 30, 40, 50, 7, 13, 25, 42, 55];

// Variável para armazenar a soma dos números
let soma = 0;

// Exibindo o array inicial no console
console.log("1o - Array inicial de números:");
console.log(numeros);

// Usando um loop for para somar todos os números do array
console.log("2o - Somando os números do array...");
for (let i = 0; i < numeros.length; i++) {
    console.log(`Adicionando o número ${numeros[i]} à soma.`);
    soma += numeros[i]; // Adiciona o número atual à soma
}

// Exibindo o resultado da soma no console
console.log("3o - Resultado da soma:");
console.log(`A soma de todos os números do array é: ${soma}`);