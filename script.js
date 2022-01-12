
// CRIAR ALERT AO REALIZAR LOGIN - REQUISITO 3
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

// CRIAR RADIO BUTTONS - REQUISITO 14
function createRadioBtn() {
  const divRadioBtns = document.getElementById('satisfaction');
  for (let key = 0; key < 10; key += 1) {
    const radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'rate';
    radioBtn.value = `${key + 1}`;
    const radioBtnText = document.createElement('p');
    radioBtnText.innerText = `${key + 1}`;-
    divRadioBtns.appendChild(radioBtnText);
    divRadioBtns.appendChild(radioBtn);
  }
}

createRadioBtn();

/* CRIAR CONTADOR DE CARACTERES - REQUISITO 15*/
const contador = document.getElementById('coment');

contador.addEventListener('keypress', function countComent(event) {
   let maximoCaracteres = 500;
   caracteresInseridos = contador.value.length;

   if(caracteresInseridos >= maximoCaracteres){
      event.preventDefault();
   }
});