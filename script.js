const button = document.getElementById('btn');

function alertFunction() {
  const adressEmail = document.getElementById('email');
  const adressPass = document.getElementById('senha');

  if (adressEmail.value === 'tryber@teste.com' && adressPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', () => {
  alertFunction();
});

// CRIAR RADIO BUTTONS - REQUISITO 14
function createRadioBtn() {
  const divRadioBtns = document.getElementById('satisfaction');
  for (let key = 0; key < 10; key += 1) {
    const radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'rate';
    radioBtn.required = 'true';
    radioBtn.value = `${key + 1}`;
    const radioBtnText = document.createElement('p');
    radioBtnText.innerText = `${key + 1}`;
    divRadioBtns.appendChild(radioBtnText);
    divRadioBtns.appendChild(radioBtn);
  }
}

createRadioBtn();

// SUBMIT BUTTON - REQUISITO 18
