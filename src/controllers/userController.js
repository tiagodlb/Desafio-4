import authService from "../services/authService.js";

export async function getUser(req, res) {
    // Recebe o id
    const id = +req.params.id;
    // Joga para service procurar o usuário
    const user = await authService.findUserById(id);
    // Retorna o usuário
    res.send(user);
}
