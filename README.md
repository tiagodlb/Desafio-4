<h1 align="center">
    Logistic Road
</h1>
<br />
<div align="center">

  ![HTML5](https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge)
  ![Javascrpit](https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge)
  ![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
  ![Nodemon](https://img.shields.io/badge/nodemon-76D04B?logo=nodemon&logoColor=%2361DAFB&style=for-the-badge)
  
  ![JSON](https://img.shields.io/badge/json-000000?logo=json&logoColor=%2361DAFB&style=for-the-badge)
  ![JSON Web Token](https://img.shields.io/badge/jsonwebtokens-000000?logo=jsonwebtokens&logoColor=%2361DAFB&style=for-the-badge)
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

  </div>


## Previews (TO-DO)
![Preview do Site]()
![Preview do Jogo]()
## O que aprendemos?
 
  - Como trabalhar e organizar uma equipe
  - Como trabalhar com múltiplas pessoas em um mesmo repositório
  - Como fazer uma API REST utilizando Express, PostgreSQL e Prisma
  - Como fazer *Deployment* de uma API 
  - [Seeding](https://www.prisma.io/docs/guides/database/seed-database) com Prisma
  -  Fábrica para testes ( TO-DO ) com Jest

## :rocket: Routes

- As respostas padrões são:
  - `200` - Successful GET request || Sucesso na requisição GET 
  - `201` - Successful POST request || Sucesso na requisição POST
  - `401` - Auth errors || Erro de autenticação
  - `404` - Resource not found || Recurso não encontrado
  - `409` - Resource conflict on POST requests || Recurso em conflito nas requisição POST
  - `422` - Body validation error on POST requests || Erro de validação no corpo nas requisições POST

### Auth

```yml
POST /signup
    - Rota para criar um novo usuario
    - body:{
        "email": "jon@doe.com",
        "name": "Jon Doe",
        "nickname": "JonTheDoe",
        "password": "DonJoe27",
        "birthday": "12-21-2020"
      }
    - response: {}
```

```yml
POST /signin
    - Rota para acesso de um usuário já existente
    - body:{
        "email": "jon@doe.com",
        "password": "DonJoe27"
    }
    - Response: {"token": JWT_TOKEN}
```
    
### Users

```yml 
POST /users
    - Rota para acessar as informações de um usuário
    - body:{
        "email": "jon@doe.com",
        "name": "Jon Doe",
        "nickname": "JonTheDoe",
        "birthday": "12-21-2020"
      }
```

```yml 
POST /users/:id
    - Routa para acessar as informações de um usuário em específico
    - body:{
        "email": "jon@doe.com",
        "name": "Jon Doe",
        "nickname": "JonTheDoe",
        "birthday": "12-21-2020"
      }
```
