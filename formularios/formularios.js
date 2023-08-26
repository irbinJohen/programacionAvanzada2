//console.log(document.forms['formulario-donacion']['correo'].value);
//curso 12:11
// comprobacion del funcionamiento boton enviar
//const botonEnviar = document.getElementById('btnEnviar');
//console.log(botonEnviar);

document.getElementById('btnEnviar').addEventListener('click',(e)=>{
e.preventDefault();

const correo=document.querySelector('#formulario-donacion [name="correo"]');
console.log(correo.value);

console.log(document.forms['formulario-donacion']['pais'].value);

const formulario = document.forms['formulario-donacion'];
console.log(formulario['donacion'].value);

console.log(formulario.fecha.value);

console.log('funciona');

console.log(formulario['terminos-y-condiciones'].checked);
});
