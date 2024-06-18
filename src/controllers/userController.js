import authService from "../services/authService.js";

export async function getUserById(req, res) {
    // Recebe o id
    const id = +req.params.id;
    // Joga para service procurar o usuário
    const user = await authService.findUserById(id);
    // Retorna o usuário
    res.send(user);
}

export async function getUsers(_req, res) {
    // Pega todos os usuários
    const users = await authService.findUsers();
    // Entrega o resultado
    res.send(users);
}
