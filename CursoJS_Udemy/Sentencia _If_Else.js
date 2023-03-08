//sintaxis basica de la sentencia if/ else
let condicion = false;

if (condicion) {
    console.log("condicion verdadera");
} else {
    console.log("condicion falsa");
} 

//ejemplo 02 if/ else if/ else
let numero = 2;

if (numero ==1) {
    console.log("numero uno");
} 
else if (numero ==2) {
    console.log("numero dos");
} 
else if(numero ==3){
    console.log("numero tres");
}
else if(numero ==4){
    console.log("numero cuatro");
}
else{
    console.log("numero desconocido");
}

//ejmplo 03
let mes = 6;
let estacion;

if(mes ==1 || mes ==2 || mes ==12){
    estacion = "invierno";
}
else if(mes ==3 || mes ==4 || mes ==5){
    estacion = "primavera";
}
else if(mes ==6 || mes ==7 || mes ==8){
    estacion = "verano";
}
else if(mes ==9 || mes ==10 || mes ==11){
    estacion ="invierno";
}
else{
    estacion = "valor incorrecto";
}
console.log(estacion);

//ejemplo 03
let horas = 5;
let saludo;

if(horas >=6 && horas <=11){
    saludo = "Buenos dias";
}
else if(horas >=12 && horas <=18){
    saludo = "Buenas Tardes";
}
else if(horas >=19 && horas <=24){
    saludo = "Buenas Noches";
}
else if(horas >=0  && horas <6){
    saludo = "durmiendo";
}
else{
    saludo = "valor incorrecto";
}

console.log(saludo);