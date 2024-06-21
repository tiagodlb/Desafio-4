import * as userRepository from '../repositories/userRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

async function findUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) throw notFoundError("Usuário não encontrado");

    return { "id": user.id, "email": user.email, "nickname": user.nickname, "birthday": user.birthday };
}

async function findUsers() {
    const users = await userRepository.findUsers();
    let mappedUser = users.forEach((user) => {
        return { "id": user.id, "email": user.email, "nickname": user.nickname, "birthday": user.birthday };
    })
    return mappedUser;
}


const userService = {
    findUserById,
    findUsers
};

export default userService;
