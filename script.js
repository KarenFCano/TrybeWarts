
const button = document.getElementById("btn");

function alertFunction() {
   let adressEmail = document.getElementById('email');
   let adressPass = document.getElementById('senha');

   if (adressEmail.value === 'tryber@teste.com' && adressPass.value === '123456') {
      alert("Olá, Tryber!");
   } else{
      alert("Email ou senha inválidos.");
   }
}

button.addEventListener("click", function(){
   alertFunction();
});
