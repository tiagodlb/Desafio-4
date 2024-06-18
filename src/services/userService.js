import * as userRepository from '../repositories/userRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

async function findUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) throw notFoundError("Usuário não encontrado");

    return user;
}

async function findUsers() {
    const users = await userRepository.findUsers();
    return users;
}

const userService = {
    findUserById,
    findUsers
};

export default userService;