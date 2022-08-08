let enviar = document.getElementById("enviar");
let apagar = document.getElementById("apagar");
let input = document.getElementsByTagName("input");
let textarea = document.getElementsByTagName("textarea");
const submitBtn = document.querySelector('#enviar');
const agreement = document.querySelector('#usoImagem');

// Queremos que o botão esteja preparado para funcionar assim que abrirmos a página. Para isso colocaremos então o addEventListener dentro do window.onload.
window.onload = function () {
    enviar.addEventListener("click", enviararquivo)
    apagar.addEventListener('click', apagararquivos);
    agreement.addEventListener('change', enableSubmit);
}

//Crie um botão para enviar as informações preenchidas.
function enviararquivo(event) {
    event.preventDefault()
    const validation = textInputValidation();
    if (validation === false) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}

//Crie um botão que limpe as informações contidas nos campos;
function apagararquivos(){
    for (let index = 0; index < input.length; index += 1) {
        const userInput = input[index];
        userInput.value = '';
        userInput.checked = false;
    }
    textarea.value = '';
}

//Faça com que somente quem autorizar o uso de imagens possa enviar suas informações. No html colocamos a propriedade disabled!!!
function enableSubmit() {
   submitBtn.disabled = !agreement.checked;
  }

//Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;
  
  const name = document.querySelector('#nomeCompleto').value.length;
  const invalidName = name < 10 || name > 40;
  
  const reason = document.querySelector('#motivo').value.length;
  const invalidReason = reason > 500;
  
  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}