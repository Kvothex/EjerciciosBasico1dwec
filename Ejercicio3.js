// 3. 1. Escribe un programa que solicite al usuario el radio de un círculo y luego calcule y
// muestre el área y el perímetro del círculo.
// • Solicita al usuario que ingrese el radio del círculo.
// • Define dos funciones: una para calcular el área del círculo y otra para calcular el
// perímetro del círculo.
// • Usa las fórmulas matemáticas apropiadas dentro de estas funciones para
// calcular el área (π * radio^2) y el perímetro (2 * π * radio) del círculo.
// • Llama a estas funciones con el radio proporcionado por el usuario como
// argumento.
// • Muestra los resultados del área y el perímetro al usuario

let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
const pi = Math.PI;

function calculaArea(radio) {
    return pi * Math.pow(radio, 2);
};

function calculaPerimetro(radio) {
    return 2 * pi * radio;
};

let area = calculaArea(radio);
let perimetro = calculaPerimetro(radio);

console.log("El área del círculo es: " + area);
console.log("El perímetro del círculo es: " + perimetro);



// 3.2. Escribe una función llamada calculatePower que tome dos
// parámetros: base y exponent. Esta función debe calcular y devolver el resultado de elevar
// la base al exponente.
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

let base = 2;
let exponent = 3;
let resultado = calculatePower(base, exponent);

console.log(`El resultado de ${base} elevado a la ${exponent} es: ${resultado}`);