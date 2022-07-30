// ## Exercicio 1 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
const title = document.getElementById('page-title')

title.innerText = "O Diabo veste Prada";
title.style.fontSize = '3rem';

// // ## Exercicio 2 - Recupere o primeiro paragrafo e altere-o.
const Paragraph = document.getElementById('paragraph');
Paragraph.innerText = "Direção: David Frankel";
const Paragraph1 = document.getElementById('paragraph1');
Paragraph1.innerText = "Roteiro: Aline Brosh McKenna";
const Paragraph2 = document.getElementById('paragraph2');
Paragraph2.innerText = "Elenco: Meryl Streep, Anne Hathaway, Emily Blunt";
const Paragraph3 = document.getElementById('paragraph3')
Paragraph3.innerText = "Título original: The Devil Wears Prada";

// // ## Exercicio 3 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
const secondParagraph = document.getElementById('second-paragraph');

secondParagraph.innerText = "Andrea Sachs (Anne Hathaway) é uma jovem que conseguiu um emprego na Runaway Magazine, a mais importante revista de moda de Nova York. Ela passa a trabalhar como assistente de Miranda Priestly (Meryl Streep), principal executiva da revista. Apesar da chance que muitos sonhariam em conseguir, logo Andrea nota que trabalhar com Miranda não é tão simples assim.";

// // ## Exercicio 4 - Por fim, recupere o subtítulo e altere-o também.
const subtitle = document.getElementById('subtitle');
subtitle.innerText = "SINOPSE";

// // ## Exercicio 5 - Adicione uma classe igual para os dois parágrafos.


// // ## Exercicio 6 - Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
const paragraphs = document.getElementsByClassName('texto');

// // ## Exercicio 7 - Altere algum estilo do primeiro deles.
paragraphs[0].style.color = 'red';
paragraphs[1].style.color = 'red';
paragraphs[2].style.color = 'red';
paragraphs[3].style.color = 'red';
paragraphs[0].style.fontSize = '1.5rem';
paragraphs[1].style.fontSize = '1.5rem';
paragraphs[2].style.fontSize = '1.5rem';
paragraphs[3].style.fontSize = '1.5rem';

// // ## Exercicio 8 - Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
subtitle.style.color = "DarkRed";
