# O que é um Middleware

Sempre que fazemos projetos com validações de schema, algumas rotas precisam ser protegidas contra corpos invalidos.
E sempre que uma rota é protegida acabamos escrevendo sempre o mesmo trecho de código, e em toda rota protegida temos o mesmo trecho de código.
Sabemos que código repetido nunca é bom sinal.
Sabendo disso a pasta middleware vai servir como um intermédiario entre o controller e o express para que, depois de validar o body, um middleware vai executar a função do controller, mas só se o body for válido.
