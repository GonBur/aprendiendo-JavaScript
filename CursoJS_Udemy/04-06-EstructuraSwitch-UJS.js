//estrucutura swictch
let numero = 3;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto);

//ejemplo con la estructura swictch
let mes = 6;
let estacion = "estacion desconocida";

switch ( mes ){
    case 1: case 2: case 12:
        estacion ="Invierno";
        break;

    case 3: case 4: case 5:
        estacion ="Primavera";
        break;

    case 6: case 7: case 8:
        estacion ="Verano";
        break;

    case 9: case 10: case 11:
        estacion ="Otoño";
        break;

    default:
        estacion = "valor no encontrado"
        break;
}
console.log(estacion);