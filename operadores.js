const resultado = 10 === '10';
console.log(resultado);

const resultado2 = 7>8 ? 'El primer valor es mayor que el segundo': 'el segundo valor es mayor';
console.log(resultado2);

//operadores logicos

const nombre= 'irbin';
const edad = 17
const tieneEntrada= true;
const tienePermiso= true;

const permitirAcceso = (edad >=18 && tieneEntrada)|| tienePermiso;
console.log('permir acceso '+ permitirAcceso);

// invertir valor
const variable = false;
console.log(!variable)

//arreglo
// usamos let para declarar valores
const colores = [];
colores[0]='rojo';
colores[1]='verde';
colores[2]='naranja';
colores[4]='amarillo';
console.log('arreglo colores tiene '+ colores.length+'colores');

colores.push('negro');
console.log(colores);

// templateStrings
//salte a 11:58:43 para ver seccion de formularios

// vamos en el minuto 1:45:27 s