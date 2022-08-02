const container = document.querySelector('#container');
container.style.backgroundColor = "Gainsboro";

const header = document.querySelector('#header-container');
header.style.background = 'MediumSeaGreen';
header.style.fontSize = "larger";
header.style.padding = '15px';

const emergencyTasks = document.querySelectorAll('.emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'DarkSalmon';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = 'MediumOrchid';
  }

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'gold';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = "black"
};

const footer = document.querySelector('#footer-container')
footer.style.background = 'DarkSlateGray';
