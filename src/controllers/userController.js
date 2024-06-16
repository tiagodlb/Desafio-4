const { findUserByEmail } = require('../repositories/userRepository')
const userService = require('../services/userService')
const createUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!email) {
        return res.status(422).json({ message: "O campo de email está vazio." });
    }

    const existingUser = await userRepository.getUserByEmail(email);
    if (existingUser) {
        return res.status(409).json({ message: "Já existe uma conta criada neste email." });
    }

    if (password !== confirmPassword) {
        return res.status(422).json({ message: "As senhas não coincidem." });
    }
    try {
        const user = await userService.createUser({ name, email, password });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar usuário." });
    }
}
module.exports = {
    createUser
}
