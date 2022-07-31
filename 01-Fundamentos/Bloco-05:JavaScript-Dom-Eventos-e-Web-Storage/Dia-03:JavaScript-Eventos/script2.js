function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
function createDaysOfTheMonth() {
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const DayList = document.querySelector('#days');

for (let index = 0; index < decemberDaysList.length;index += 1) {
    const day = decemberDaysList[index];
    const diaDoMes = document.createElement('li');
    diaDoMes.innerHTML = day;
    
    if (day === 24 || day === 31){
        diaDoMes.className = "day holiday";
    } else if (day === 4 || day === 11 || day === 18) {
        diaDoMes.className = "day friday";       
    } else if (day === 25) {
        diaDoMes.className = "day holiday friday";
    } else {
        diaDoMes.className = "day";
    }
    DayList.appendChild(diaDoMes);
    };
}
createDaysOfTheMonth();

// Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
function createHolidayButton(buttonName){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
    
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;

    buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados');


// Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
function displayHolidays(){
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    getHolidayButton.addEventListener('click', function() {
        for (let index = 0; index < getHolidays.length; index += 1) {
          if (getHolidays[index].style.backgroundColor === setNewColor) {
            getHolidays[index].style.backgroundColor = backgroundColor;
          } else {
            getHolidays[index].style.backgroundColor = setNewColor;
          }
        }
      });
    }
displayHolidays();

// Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
function createFridayButton(buttonName){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton1 = document.createElement('button');
    let newButton2ID = 'btn-friday';
    
    newButton1.innerHTML = buttonName;
    newButton1.id = newButton2ID;

    buttonContainer.appendChild(newButton1);
}
createFridayButton('Sexta-feira');

// Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
function displayFridays(fridaysArray){
    let getFridayButton = document.querySelector('#btn-friday');
    let getFriday = document.querySelectorAll('.friday');
    let newFridayText = 'SEXTOU o/';
    
    getFridayButton.addEventListener('click', function() {
        for (let index = 0; index < getFriday.length; index += 1) {
          if (getFriday[index].innerHTML !== newFridayText) {
            getFriday[index].innerHTML = newFridayText;
          } else {
            getFriday[index].innerHTML = fridaysArray[index];
          }
        }
      });
    }
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.
function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px'; 
      event.target.style.fontWeight = '600';
    });
  }  

function dayMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px'; 
      event.target.style.fontWeight = '200';
    });
 }

 dayMouseOver();
 dayMouseOut();

  // Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function taskCalendar(task) {
    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
   
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
}
taskCalendar('projeto');

// Exercício 8:
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function addCaption(cor) {
    let tasksContainer = document.querySelector('.my-tasks');
    let tag = document.createElement("div");
    tag.className = "task";
    tag.style.background = cor
    tasksContainer.appendChild(tag);   
}
addCaption("blue");

// Exercício 9:
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  }
setTaskClass();

// Exercício 10:
// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)
function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; 
        event.target.style.color = color; 
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)'; 
      }
    });
  }
  setDayColor();

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.
function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    });
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  }
  
  addNewTask();