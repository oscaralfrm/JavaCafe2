const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

form.addEventListener('submit', e => {
    let warnings = '';
    let entrar = false;

    parrafo.innerHTML = '';

    if(nombre.value.length < 6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }

    if(apellido.value.length < 3){
        warnings += `El apellido no es valido <br>`;
        entrar = true;
    }

    if(email.value.length < 6){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(telefono.value.length < 6){
        warnings += `El telefono no es valido <br>`;
        entrar = true;
    }

    if(entrar){
        e.preventDefault();
        parrafo.innerHTML = warnings;
    }
});


/* 

Para la implementación de la API de Cafés:

*/

const cafeURL = 'https://api.sampleapis.com/coffee/hot';
const imagenApiFormulario = document.getElementById('imagen-a-mostrar');

fetch(cafeURL)
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos)
        imagenApiFormulario.src = datos[2].image})
    .catch(error => console.log(error));



/* 

Para la implementación de la API de Formularios, revisar el HTML ya que la API de Formularios
funciona a través del método 'action' del mismo.

*/


