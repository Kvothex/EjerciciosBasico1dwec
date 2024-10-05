//1.1. Declara una variable de tipo string y asígnale un mensaje de saludo. Luego, imprime
//la variable en la consola.
let saludo = "Hola, bienvenido.";
console.log(saludo);

//1.2. Declara una variable de tipo number y asígnale tu edad. Luego, imprime la variable en
//la consola.
let edad = 28;
console.log(edad);

//1.3. Declara una variable de tipo boolean y asígnale true o false según tu preferencia.
//Luego, imprime la variable en la consola.
let x = true;
console.log(x);


//1.4. Declara una variable de tipo null y otra de tipo undefined. Luego, imprime ambas
//variables en la consola.
let n = null;
let und = undefined;
console.log(n);
console.log(und);


// 1.5. Crea un objeto que represente un artículo con propiedades
//como name, price y category. Imprime el objeto en la consola.
let articulo = {
    name: "The Witcher 3",
    price: 20,
    category: "Juegos"
};

console.log(articulo);


//1.6. Declara un array que contenga nombres de ciudades. Imprime el array en la consola
let ciudades = ["Madrid", "Jerez", "Cádiz"];
console.log(ciudades);


// 1.7. Declara una variable y asígnale tu color favorito. Luego, modifica la variable con otro
//color e imprime ambos valores en la consola.
let color = "Amarillo";
console.log(color);
color = "Azul";
console.log(color);


//1.8. Declara dos variables, una sin asignarle ningún valor y otra con el valor null. Imprime
//ambas variables en la consola.
let variable1;
let variable2 = null;
console.log("La variable sin valor es: " , variable1);
console.log("La variable null es: " , variable2);

//1.9. Crea dos variables, una dentro de una función y otra fuera de ella. Intenta acceder a
//ambas variables desde dentro y fuera de la función, y observa los resultados en la
//consola.
let variableExt = "Externa";

function ejercicio9 (){
    let variableInt = "Interna"

    console.log("Dentro de la funcion: la variable externa es ", variableExt , " y la interna es ", variableInt);
}

ejercicio9();
//console.log("Fuera de la funcion: la variable externa es ", variableExt , " y la interna es ", variableInt);


//1.10. Declara variables con nombres que sigan las reglas de JavaScript y otras que no las
//sigan. Imprime los nombres de las variables en la consola.
let nombreValido = "Manuel";
console.log(nombreValido);
//let 2nombreInvalido = "Juan";
//console.log(2nombreInvalido);


//1.11. Utiliza diferentes operadores (+, -, *, /, %, ++, --) con variables que contengan
//números. Imprime los resultados en la consola.
let a = 2;
let b = 10;

let suma = a + b;
let resta = a - b;
let multp = a * b;
let division = a / b;
let resto = a % b;
let incremento = a++
let decremento = b--;

console.log(suma, resta, multp, division, resto, incremento, decremento);


//1.12. Declara una variable con una cadena de texto de varias líneas usando caracteres de
//escape (\n, \t). Imprime la cadena resultante en la consola.
let texto = "Hola.\n\tLista de juegos:\n\t\t1. The witcher 3\n\t\t2. God of War Ragnarok (-)\n\t\t";

console.log(texto);
