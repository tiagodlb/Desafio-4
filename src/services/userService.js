import * as userRepository from '../repositories/userRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

async function findUserById(id) {
    try {
        const user = await userRepository.findById(id).catch();
        if (!user) throw notFoundError("Usuário não encontrado");

        return { "id": user.id, "email": user.email, "nickname": user.nickname, "birthday": user.birthday };
    } catch (error) {
        console.error(error.message);
    }
}

async function findUsers() {
    const users = await userRepository.findUsers();
    let mappedUser = users.map((user) => {
        return {
            "id": user.id,
            "email": user.email,
            "nickname": user.nickname,
            "birthday": user.birthday
        };
    })
    return mappedUser;
}


const userService = {
    findUserById,
    findUsers
};

export default userService;
