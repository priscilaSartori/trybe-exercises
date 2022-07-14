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

# Exercício 1 - Modifique o tamanho do h1 para 65 pixels
<style>
        h1 {
            width: 65pxl;
        }
</style>

# Exercício 2 - Modifique a cor do texto do h1 para laranja
<style>
	h1 {
            color: orange;
        }
</style>

# Exercício 3 - Modifique a cor de fundo da lista não ordenada
<style>
	#cores {
            background-color: yellowgreen;
        }
</style>

<ul> id="cores"
      <li>Amarelo</li>
      <li>Vermelho</li>
      <li>Marrom</li>
    </ul>

# Exercício 4 - Crie uma classe para modificar a cor de fundo da tag p e da ul ao mesmo tempo
<style>
	.cordefundo{
            background-color: khaki;
        }
</style>
<p class="cordefundo">Qual é a sua cor favorita?</p>
    <ul class="cordefundo">

Resultado:
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style>
        h1 {
            width: 65pxl;
            color: orange;
        }
        #cores {
            background-color: yellowgreen;
        }
        p, ul {
            background-color: khaki;
        }
    </style>
  </head>
  <body>
    <h1>Exercícios 3.2</h1>
    <p class="cordefundo">Qual é a sua cor favorita?</p>
    <ul id="cores" class="cordefundo">
      <li>Amarelo</li>
      <li>Vermelho</li>
      <li>Marrom</li>
    </ul>
  </body>
</html>
