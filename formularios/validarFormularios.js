//aacedimos con getElement
const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    const datos ={
        correo:formulario.correo.value,
        pais:formulario.pais.value,
        donacion:formulario.donacion.value,
        fecha:formulario.fecha.value,
        terminos:formulario['terminos-y-condiciones'].checked,
    };

    // comprobando correo
    if(datos.correo<=2){
        console.log('correo invalido');
        return; 
    }
    // comprobando pais
    if(datos.pais ===''){
        console.log('pais invalido');
        return; 
    }
    //comprobando cantidad a donar
    if(datos.donacion ===''){
        console.log('selecciona una cantidad');
        return; 
    }
    if(datos.fecha ===''){
        console.log('selecciona una fecha');
        return; 
    }

    if(!datos.terminos){
        console.log('Acepta los terminos y condciones');
        alert('No has aceptado los teminos y condiciones')
        return; 
    }

console.log(datos);
console.log('Enviando datos...');
});

// vamos en el minuto 12:58 
//https://www.youtube.com/watch?v=Eh-s-n_6zNQ&t=4928s&ab_channel=FalconMasters