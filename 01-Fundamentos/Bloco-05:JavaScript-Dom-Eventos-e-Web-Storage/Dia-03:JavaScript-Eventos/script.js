const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.Deve existir apenas um elemento com a classe 'tech'. 
function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = "";
}

firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('input', function(event){
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function(event){
  window.location.replace('https://priscilasartori.github.io/');
})

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
// Segue abaixo um exemplo do uso de event.target:
myWebpage.addEventListener('mouseover', function(event){
  event.target.style.color = "blue "
})
