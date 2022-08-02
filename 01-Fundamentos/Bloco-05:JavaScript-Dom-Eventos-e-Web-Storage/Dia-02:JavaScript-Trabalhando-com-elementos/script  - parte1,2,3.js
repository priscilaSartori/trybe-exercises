// ## ## Parte 1 - Buscando elementos
// ## Exercicio 1 - Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// ## Exercicio 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

// ## Exercicio 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "primeiroFilhoDoFilho"

// ## Exercicio 4 - Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

// ## Exercicio 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// ## Exercicio 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const atencao = elementoOndeVoceEsta.nextSibling;

// ## Exercicio 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// ## Exercicio 8 - Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// ## ## Parte II - Criando elementos
// ## Crie um irmão para elementoOndeVoceEsta.
// 1 - Recupere o elemento com o id pai
const pai = document.getElementById('pai');
// 2 - Crie um novo elemento
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
// 3 - Adicione o elemento criado como filho do elemento com o id `pai`
pai.appendChild(irmaoElementoOndeVoceEsta);

// ## Crie um filho para elementoOndeVoceEsta.
// 1 - Recupere o elemento com o id elementoOndeVoceEsta
const elementoOndeVoceEsta1 = document.getElementById('elementoOndeVoceEsta'); 
// 2 - Crie um novo elemento
const filhoElementoOndeVoceEsta = document.createElement('section');  
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
// 3 - Adicione o elemento criado como filho do elemento `elementoOndeVoceEsta`
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); 

// ## Crie um filho para primeiroFilhoDoFilho.
// 1 - Recupere o elemento com o id `primeiroFilhoDoFilho`
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); 
// 2 - Crie um novo elemento
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
// 3 - Adicione o elemento criado como filho do elemento `primeiroFilhoDoFilho`
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// ## A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho3 = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

// ## ## Parte III - Removendo elementos
// ## Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
// 1 - Recupere o elemento com o id pai
let pai = document.querySelector('#pai');
// 2 - Utilize o .childNodes para retornar uma coleção viva de nós filhos do elemento pai.
// 3 - Utilize uma estrutura de repetição para iterar sob o nodeList todosOsFilhos do último ao primeiro elemento. Nesse aspecto, o nodeList se comporta como um array, acessível por índice numérico.
for (let index = 0; index < pai.childNodes.length; index +=1) {
// 4 - Armazene o filho atual em uma variável.
let currentChildren = pai.childNodes[index];
// 5 - Caso o id do filhoAtual seja diferente de elementoOndeVoceEsta, remova o filhoAtual.
if(currentChildren.id !== "elementoOndeVoceEsta"){
    currentChildren.remove();
    }
}
// 6 - Recupere o elemento com o id segundoEUltimoFilhoDoFilho e o remova.
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();
