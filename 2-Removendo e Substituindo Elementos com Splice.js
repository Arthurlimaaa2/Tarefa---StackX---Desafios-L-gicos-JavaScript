// Array inicial com 6 nomes de animais (todos trocados)
let animais = ["elefante", "girafa", "pinguim", "tubarão", "coruja", "macaco", "urso", "leäo"];

console.log("Animais em ordem inicial:");
console.log(animais);
// usando splice
animais.splice(2, 2, "urso", "leäo");

// Exibindo o array resultante no console
console.log("Animais após ordem ser trocada:");
console.log(animais);
