import * as userRepository from '../repositories/userRepository.js';
import {
    conflictError,
    notFoundError,
    unauthorizedError
} from '../utils/errorUtils.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createUser(user) {
    /* Checa no banco se o usuário existe */
    const existingUser = await userRepository.findUserByEmail(user.email);
    if (existingUser) {
        throw conflictError();
    }

    const SALT = 10;
    const hashedPassword = bcrypt.hashSync(user.password, SALT);

    await userRepository.insertUser({ ...user, password: hashedPassword });
}

async function login(login) {
    const user = await getUserOrFail(login);
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    return token;
}

async function getUserOrFail(login) {
    const user = await userRepository.findUserByEmail(login.email);
    if (!user) throw unauthorizedError("Credenciais inválidas.");

    const isPasswordValid = bcrypt.compareSync(login.password, user.password)
    if (!isPasswordValid) {
        throw unauthorizedError("Credenciais inválidas.");
    }
    return user;
}

const authService = {
    createUser,
    login,
};

export default authService;