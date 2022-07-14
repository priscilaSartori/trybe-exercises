<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style></style>
  </head>
  <body>
    <h1>Exercícios 3.2</h1>
    <p>Qual é a sua cor favorita?</p>
    <ul>
      <li>Amarelo</li>
      <li>Vermelho</li>
      <li>Marrom</li>
    </ul>
  </body>
</html>

# Exercício 1 - Modifique o font-family do h1 para sans-serif
<style>
        h1 {
            font-family: sans-serif;
        }
</style>

# Exercício 2 - Deixe o parágrafo com o font-weight 600
<style>
	p {
            font-weight: 600;
        }
</style>

# Exercício 3 - Modifique o font-size do body para 16px
<style>
	body {
            font-size: 16px;
        }
</style>

# Exercício 4 - Coloque o tamanho do parágrafo com o tamanho de 3 vezes o padrão do body
<style>
	p {
            font-size: 3em;
        }
</style>

# Exercício 5 - Explore as propriedades font-style, line-height, text-align e text-decoration
<style>
	body {
            font-style: italic;
            line-height: 20px;
            text-align: justify;
            text-decoration: antiquewhite;
        }
</style>

# Exercício 6 - Troque a cor de fundo de cada item da lista para a cor correspondente ao texto
<style>
	#amarelo {
            background-color: yellow;
        }
        #vermelho {
            background-color: red;
        }
        #marrom {
            background-color: brown ;
        }
</style>
<ul>
      <li id="amarelo">Amarelo</li>
      <li id="vermelho">Vermelho</li>
      <li id="marrom">Marrom</li>
    </ul>
  
  
    
# Resultado:
    <!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style>
        h1 {
            font-family: sans-serif;
        }
        p {
            font-weight: 600;
            font-size: 3em;
        }
        body {
            font-size: 16px;
            font-style: italic;
            line-height: 20px;
            text-align: justify;
            text-decoration: antiquewhite;
        }
        #amarelo {
            background-color: yellow;
        }
        #vermelho {
            background-color: red;
        }
        #marrom {
            background-color: brown ;
        }
    </style>
  </head>
  <body>
    <h1>Exercícios 3.2</h1>
    <p>Qual é a sua cor favorita?</p>
    <ul>
      <li id="amarelo">Amarelo</li>
      <li id="vermelho">Vermelho</li>
      <li id="marrom">Marrom</li>
    </ul>
  </body>
</html>
