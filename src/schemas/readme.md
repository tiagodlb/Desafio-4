# O que é o Schemas

É onde vamos checar e validar alguns corpos (Bodys) inválidos que podem prejudicar o nosso projeto.

Nesta camada tem o código implementado de forma que não importa se a funcionalidade vai ser acessada por HTTP, Terminal, WebSocket... Ou seja, ela não “sabe” nada sobre como vai ser usada, mas tem o código suficiente para implementar a funcionalidade

Para diferenciar: - `services`: implementa as funcionalidades, isto é, as **regras de negócio** do sistema - `controllers`: provê acesso às funcionalidades validando o payload da requisição e respondendo o que aconteceu
