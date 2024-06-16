import * as userRepository from '../repositories/userRepository.js';
import {
    conflictError,
    unauthorizedError
} from '../utils/errorUtils.js';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function createUser(user) {
    console.log(user);
    /* Checa no banco se o usuário existe */
    const existingUser = await userRepository.findUserByEmail(user.email);
    if (existingUser) {
        throw conflictError();
    }

    await userRepository.insertUser({ ...user });
}

async function login({ email, password }) {
    const user = await getUserOrFail({ email });
    if (!await bcrypt.compare(password, user.password)) {
        throw new Error('Senha inválida');
    }
    const token = generateToken(user);
    return { user, token };
}

async function getUserOrFail({ email }) {
    const user = await userRepository.findUserByEmail(email);
    if (!user) throw new Error('Email inválido');
    return user;
}

function generateToken(user) {
    const payload = { id: user.id, email: user.email };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
}
const authService = {
    createUser,
    login,
};

export default authService;