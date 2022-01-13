// CRIAR ALERT AO REALIZAR LOGIN - REQUISITO 3
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
    radioBtn.id = `rate${key + 1}`;
    radioBtn.name = 'rate';
    radioBtn.required = 'true';
    radioBtn.value = `${key + 1}`;
    const radioBtnText = document.createElement('label');
    radioBtnText.setAttribute('for', `rate${key + 1}`);
    radioBtnText.innerText = `${key + 1}`;
    divRadioBtns.appendChild(radioBtnText);
    divRadioBtns.appendChild(radioBtn);
  }
}

createRadioBtn();

/* CRIAR CONTADOR DE CARACTERES - REQUISITO 15 */
const contador = document.getElementById('textarea');

contador.addEventListener('keypress', (event) => {
  const maximoCaracteres = 500;
  const caracteresInseridos = contador.value.length;

  if (caracteresInseridos >= maximoCaracteres) {
    event.preventDefault();
  }
});

// CRIAR CONTADOR REGRESSIVO DE CARACTERES - REQUISITO 20
const remainingCharacters = document.getElementById('counter');

contador.oninput = function remaining() {
  remainingCharacters.innerHTML = (500 - this.value.length);
};
// HABILITAR BOTÃO ENVIAR - REQUISITO 18
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

window.onload = () => {
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = 'grey';
  submitBtn.style.cursor = 'default';
};

agreement.addEventListener('click', () => {
  if (submitBtn.disabled === true) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = 'indigo';
    submitBtn.style.cursor = 'pointer';
  } else {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = 'grey';
    submitBtn.style.cursor = 'default';
  }
});
