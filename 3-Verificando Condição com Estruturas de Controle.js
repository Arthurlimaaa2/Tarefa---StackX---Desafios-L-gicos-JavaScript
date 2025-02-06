// Array com vários números, incluindo mais números maiores que 50
let numeros = [10, 20, 30, 40, 60, 70, 80, 25, 55, 90];

// Variável para contar quantos números são maiores que 50
let contador = 0;

// Exibindo o array inicial no console
console.log("1o - Array inicial de números:");
console.log(numeros);

// Verificando cada número do array
console.log("2o - Verificando se há números maiores que 50...");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 50) {
        console.log(`Número ${numeros[i]} é maior que 50.`);
        contador++; // Incrementa o contador se o número for maior que 50
    }
}

// Exibindo o resultado final
if (contador > 0) {
    console.log(`3o - O array possui ${contador} número(s) maior(es) que 50.`);
} else {
    console.log("3o - O array não possui números maiores que 50.");
}