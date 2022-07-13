# DIA 3

O objetivo da dinâmica desse dia foi entender como a internet funciona, pois é primordial para uma pessoa que irá desenvolver software para a internet.
É importante ter uma noção de como a rede da internet é estruturada, pois quando for pensar no design de uma aplicação web, por exemplo, terá que considerar fatores como a latência da rede, a geolocalização dos servidores, a velocidade e/ou disponibilidade de conexão dos usuários, enfim. 🔮
Atualmente, a grande maioria das aplicações web são desenvolvidas usando o modelo Cliente & Servidor. É importante entender esse modelo para entender como o software se encaixa nele. Precisamos, em suma, saber como os servidores funcionam, para quando for colocar um projeto "no ar", ou "em produção". 🖥


Mini seminário: Tópicos de Internet
Tema 1: O que é a arquitetura Cliente / Servidor?
Tema 2: DNS e registros de domínio. O que são?
Tema 3: Quais os tipos de resposta HTTP?
Tema 4: Diferenças entre HTTP e HTTPS.


Tema 3: Quais os tipos de resposta HTTP?

A cada “solicitação” feita, o HTTP responde se obteve sucesso, se não, se há algum erro na página, etc. Estas mensagens de erro são os “status HTTP”. 
Dessa forma, para que essa comunicação possa ser feita corretamente, existem os códigos de resposta, que mostram o status do HTTP, que é a resposta para solicitação.

Elas são divididas em 05 classes:

Respostas de Informação (100 -199)
A solicitação foi recebida e o servidor já está pronto para continuar com o processo. Os mais comuns são: 100 Continue e 101 Switching Protocol

Respostas de Sucesso (200 -299)
A solicitação foi recebida, interpretada e processada com sucesso pelo servidor. Ex.: 200 - OK (Requisição bem sucedida); 202 – Aceito (Requisição bem sucedida, mas o processamento não foi concluído).

Respostas de Redirecionamento (300-399)
Informam que um recurso foi movido para um novo local;  fornecem  informações sobre onde encontrar o conteúdo. Ex.: 301 - Movido permanentemente; 307 - Redirecionamento temporário.

Respostas de Erros do Cliente (400-499)
Servidor não conseguiu processar a solicitação porque o cliente a fez de forma errada ou que não dependa dele, como por exemplo uma página excluída. Os mais comuns são:  400 Requisição inválida; 403 Proibido e 404 Não encontrado

Respostas de Erros do Servidor (500-599)
Indicam erros do servidor.  Ex.: 502, - Bad Gateway (servidor ao trabalhar com uma gateway não conseguiu receber uma resposta válida)
