import authService from "../services/authService.js";

export async function signUp(req, res) {
    /*
    {
        name: "João",
        email: "joao@teste.com.br",
        password: "teste",
        confirmPassword: "teste"
    }  
    */
    const user = req.body;

    // Cria o usuario
    await authService.createUser(user);

    // Envia o código HTTP 201 CREATED
    res.sendStatus(201);
}

export async function signIn(req, res) {
    // Pega o body da requisição
    const user = req.body;

    // Joga para a service fazer o login
    const { resposta, token } = await authService.login(user);

    // Envia código HTTP 200 OK e a resposta + token JWT
    res.status(200).send({ resposta, token })

}