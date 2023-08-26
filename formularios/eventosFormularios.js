const formulario = document.forms['formulario-donacion'];

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Enviando Datos')

});

// evento change nos muestra cuando el valor cambia
formulario.pais.addEventListener('change',(e)=>{
    console.log('El nuevo valor es: '+ e.target.value);
})

formulario['cantidad-5'].addEventListener('change',()=> console.log('La cantidad cambio a 5'));
formulario['cantidad-10'].addEventListener('change',()=> console.log('La cantidad cambio a 10'));

// evento focus
formulario.correo.addEventListener('focus',()=>{
    console.log('Input correo es el foco de atencion');
})
// evento blur
formulario.correo.addEventListener('blur',()=>{
    console.log('Input correo ya no es el foco de atencion');
})