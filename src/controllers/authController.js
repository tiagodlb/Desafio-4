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

    // Envia o código HTTP 201
    res.sendStatus(201);
}

export async function signIn(req, res) {
    try {
        const user = req.body;
        const { resposta, token } = await authService.login(user);
        res.status(200).send({ resposta, token })
    } catch(error){
        res.status(401).json({ error: error.message });
    }
    
}