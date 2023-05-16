// quiero todos los elementos input de tipo texto
const inputsTexto = document.querySelectorAll('input[type="text"]');

// foreach se activa cada vez que ingresa un numero
inputsTexto.forEach (input => {
  input.addEventListener('input', event => {
    const valor = event.target.value;
    event.target.value = valor.replace(/[0-9]/, ''); // remplaza cualquier numero por una cadena vacia y lo elimina
  });
});


// checkbox

const check = document.querySelector('input[name="newsletter"]');

check.addEventListener('change',(event) => {
    console.log(event.target.checked); // checked para que dvuelva un booleano // usar para checkbox
   
 });

