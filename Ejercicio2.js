// 2.1. Escribe un programa que verifique si un número es positivo, negativo o cero e imprima
// el resultado.
let numero = 10;
if (numero > 0) {
    console.log(numero + " es un numero positivo.");
} else if (numero < 0) {
    console.log(numero + " es un numero negativo.");
} else {
    console.log(numero + " es cero.");
};


// 2.2. Crea un programa que determine si una persona es menor de edad, adulta o anciana
// según su edad.
let edad = 40;
if (edad < 18) {
    console.log("La persona es menor de edad.");
} else if (edad >= 18 && edad <= 60) {
    console.log("La persona es adulta.");
} else {
    console.log("La persona es anciana.");
};



// 2.3. Utiliza un bucle for para imprimir los valores de i desde 0 hasta 4.
for (let i = 0; i < 5; i++) {
    console.log(i);
};


// 2.4. Utiliza un bucle while para imprimir los valores del contador desde 0 hasta 4.
let contador = 0;
while(contador < 5){
    console.log(contador);
    contador++;
};


// 2.5. Emplea un bucle do-while para imprimir los valores de x desde 0 hasta 4.
let x = 0;
do {
    console.log(x);
    x++; 
} while (x < 5);


// 2.6. Crea un bucle for que se detenga cuando i sea igual a 3 usando la instrucción break.
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break; 
    }
    console.log(i);
};


// 2.7. Implementa un bucle for que salte la iteración cuando j sea igual a 2 usando la
// instrucción continue.
for (let j = 0; j < 5; j++) {
    if (j == 2) {
        continue;
    }
    console.log(j);
}


// 2.8. Convierte un número del 1 al 12 en el nombre del mes correspondiente. El programa
// debe solicitar al usuario que ingrese un número del 1 al 12 y luego mostrar el nombre del
// mes asociado.
let numeroMes = parseInt(prompt("Ingrese un número del 1 al 12:"));
let nombreMes;
switch (numeroMes) {
    case 1:
        nombreMes = "Enero";
        break;
    case 2:
        nombreMes = "Febrero";
        break;
    case 3:
        nombreMes = "Marzo";
        break;
    case 4:
        nombreMes = "Abril";
        break;
    case 5:
        nombreMes = "Mayo";
        break;
    case 6:
        nombreMes = "Junio";
        break;
    case 7:
        nombreMes = "Julio";
        break;
    case 8:
        nombreMes = "Agosto";
        break;
    case 9:
        nombreMes = "Septiembre";
        break;
    case 10:
        nombreMes = "Octubre";
        break;
    case 11:
        nombreMes = "Noviembre";
        break;
    case 12:
        nombreMes = "Diciembre";
        break;
    default:
        nombreMes = "Número inválido. Debe ser del 1 al 12.";
}

console.log(nombreMes);


