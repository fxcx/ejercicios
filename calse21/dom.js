// capturar valor de los imputs
const inputsTexto = document.querySelectorAll('input[type="text"]');
const password = document.querySelectorAll('input[tipe="password"]');
const check = document.querySelector('input[name="newsletter"]');




// foreach se activa cada vez que ingresa un numero
inputsTexto.forEach (input => {
  input.addEventListener('input', event => {
    const valor = event.target.value;
    event.target.value = valor.replace(/[0-9]/, ''); // remplaza cualquier numero por una cadena vacia y lo elimina
  });
});



// checkbox



check.addEventListener('change',(event) => {
    console.log(event.target.checked); // checked para que dvuelva un booleano // usar para checkbox
   
 });

