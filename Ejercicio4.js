// 4.1. Crea un programa que solicite al usuario ingresar una lista de números y luego
// encuentre el número más grande en esa lista.
// • Solicita al usuario que ingrese la cantidad de números que quiere introducir.
// • Solicita al usuario que introduzca cada número uno por uno.
// • Almacena estos números en un array.
// • Escribe una función llamada findLargestNumber que tome un array de números
// como entrada y devuelva el número más grande en el array.
// • Dentro de la función, itera a través del array usando un bucle for para encontrar el
// número más grande.
// • Muestra el número más grande encontrado al usuario.
// Asegúrate de que el programa utilice arrays para almacenar los números y la función para
// encontrar el número más grande
// Función para encontrar el número más grande en un array

let numero = parseInt(prompt("¿Cuántos números quieres introducir?"));
let numeros = [];

for (let i = 0; i < numero; i++) {
    let numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
    numeros.push(numero); 
}

function buscaMayorNumero(nums) {
    let mayor = nums[0]; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > mayor) {
            mayor = nums[i]; 
        }
    }
    return mayor;
}

let mayorNumero = buscaMayorNumero(numeros);

console.log(`El número más grande en la lista es: ${mayorNumero}`);
