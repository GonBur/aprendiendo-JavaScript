/*
    Ejemplos de tipos 
    de datos en JavaScrip
*/

/*typeof para preguntar el tipo 
  de dato en la variable*/
let preguntarTipo_variable = 555;
console.log(typeof preguntarTipo_variable);

//Tipo de dato STRING
let nombre = "Arom";
console.log(nombre);

//Tipo de dato NUMBER
let numero = 2004;
console.log(numero);

//Tipo de dato object-OBJETO 
let objecto = {
    nombre : "Arom",
    apellido : "Gonzales",
    telefono : 933662415
}
console.log(objecto);

//Tipo de dato BOOLEAN - Verdadero-Falso
let bandera = true;
console.log(bandera);

//Tipo de dato FUNCTION-FUNCION
function miFuncion(){}
console.log(miFuncion);

//Tipo de dato SYMBOL
let simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una functio

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo de dato UNDEFINED
let x;
console.log(typeof x);
    //ejemplo
    x = undefined;
    console.log(typeof x);

//Tipo de dato NULL= ausencia de valor
let y = null;
console.log(typeof y);

//Ejemplo de un arreglo en JavaScrip
let autos = ["BMW", "AUDI", "VOLVO"];
console.log(autos);
console.log(typeof autos);

//Ejemplo 
let z = "";
console.log(z);
console.log(typeof z);