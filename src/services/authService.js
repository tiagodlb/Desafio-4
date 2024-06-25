import * as userRepository from '../repositories/userRepository.js';
import {
    conflictError,
    notFoundError,
    unauthorizedError
} from '../utils/errorUtils.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createUser(user) {
    try {
        /* Checa no banco se o usuário existe */
        const existingUser = await userRepository.findUserByEmail(user.email);
        if (existingUser) {
            throw conflictError();
        }

        const SALT = 10;
        const hashedPassword = bcrypt.hashSync(user.password, SALT);

        await userRepository.insertUser({ ...user, password: hashedPassword });
    } catch (error) {
        console.log(error.message);
    }
}

async function login(login) {
    try {
        const user = await getUserOrFail(login);
        if (!user) throw unauthorizedError("Credenciais inválidas.");
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

        return token;
    } catch (error) {
        console.log(error)
    }
}

async function getUserOrFail(login) {
    try {
        const user = await userRepository.findUserByEmail(login.email);
        if (!user) throw unauthorizedError("Credenciais inválidas.");

        const isPasswordValid = bcrypt.compareSync(login.password, user.password)
        if (!isPasswordValid) {
            throw unauthorizedError("Credenciais inválidas.");
        }
        return user;
    } catch (error) {
        console.log(error.message);
    }
}

const authService = {
    createUser,
    login,
};

export default authService;