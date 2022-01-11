/* const button = document.getElementById('btn');

button.addEventListener('click', function alert(){
  alert("Email ou senha inválidos");
}); */

// CRIAR RADIO BUTTONS - REQUISITO 14
function createRadioBtn() {
  const divRadioBtns = document.getElementById('satisfaction');
  for (let key = 0; key < 10; key += 1) {
    const radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'rate';
    radioBtn.value = `${key + 1}`;
    const radioBtnText = document.createElement('p');
    radioBtnText.innerText = `${key + 1}`;
    divRadioBtns.appendChild(radioBtnText);
    divRadioBtns.appendChild(radioBtn);
  }
}

createRadioBtn();
