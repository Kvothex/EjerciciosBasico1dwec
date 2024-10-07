// 5.1. Bucle for
// • Imprimir los números del 20 al 30 en la consola.
for (let i = 20; i <= 30; i++){
    console.log("ejercicio1", i);
};


// • Imprimir los números pares del 30 al 50 en la consola.
for (let i = 30; i <= 50; i++){
    if (i % 2 == 0){
        console.log("ejercicio2", i);
    }
};


// • Calcular la suma de los primeros 50 números naturales.
let suma = 0;
for (let i = 1; i <= 50; i++){
    suma += i;
};
console.log("ejercicio3" , suma);


// • Imprimir la tabla de multiplicar del 8.
for (let i = 1; i <= 10; i++){
    console.log("ejercicio4", i * 8);
};


// • Imprimir los elementos de un array.
let array1 = [4, 2, 5];
for (let i = 0; i < array1.length; i++){
    console.log("ejercicio5", array1[i]);
};


// • Imprimir un patrón de asteriscos en forma de triángulo, con altura 9.
let altura = 9;
for (let i = 1; i <= altura; i++) {
    let fila = ""; 
    for (let j = 1; j <= i; j++) {
        fila += "*"; 
    }
    console.log(fila); 
}


// • Calcular la suma de los números pares del 1 al 50.
let sumaPares = 0;
for (let i = 0; i <= 50; i++){
    if (i % 2  == 0){
        sumaPares += i;
    }
}
console.log("ejercicio7", sumaPares);


// • Imprimir los números del 30 al 20 en orden descendente.
for (let i = 30; i >= 20; i--){
    console.log("ejercicio8", i);
}


// • Calcular el promedio de un array de números.
let arrayNumeros = [1, 2, 3, 4, 5];
let sumaArray = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
    sumaArray += arrayNumeros[i];
}

let promedio = sumaArray / arrayNumeros.length;

console.log("ejercicio9 //// El promedio es: " + promedio);
