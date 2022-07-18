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

# Exercício 1 - Coloque todo o CSS criado até agora nos exercícios anteriores em um arquivo externo.
    <link rel="stylesheet" href="style.css"> 
    

# Resultado
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <link rel="stylesheet" href="style.css"> 
    <style></style>
  </head>
  <body>
    <h1>Exercícios 3.2</h1>
    <p class="cordefundo">Qual é a sua cor favorita?</p>
    <ul class="cordefundo">
      <li id="amarelo">Amarelo</li>
      <li id="vermelho">Vermelho</li>
      <li id="marrom">Marrom</li>
    </ul>
  </body>
</html>