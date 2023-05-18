// capturar valor de los imputs
window.addEventListener('DOMContentLoaded', () => {
  
 const inputsTexto = document.querySelectorAll('input[type="text"]');
 const Password = document.querySelectorAll('input[type="password"]');
 const check = document.querySelector('input[name="newsletter"]');
 const form = document.querySelector('form')


 // foreach se activa cada vez que ingresa un numero
 inputsTexto.forEach (input => {
  input.addEventListener('input', event => {
    const valor = event.target.value;
    event.target.value = valor.replace(/[0-9]/, ''); // remplaza cualquier numero por una cadena vacia y lo elimina
  });
 });

 //password
  Password = (password,confirmPassword) => password === confirmPassword
 //chekbox
  check.addEventListener('change',(event) => {
    console.log(event.target.checked); // checked para que dvuelva un booleano // usar para checkbox
   
 });

 form.addEventListener('submit', (event) => {
  event.preventDefault()


 }) 

})