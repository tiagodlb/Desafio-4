import { prisma } from "../database.js";

export async function findById(id) {
    return prisma.user.findUnique({
        where: { id }
    })
}

export async function findUserByEmail(email) {
    return prisma.user.findUnique({
        where: { email }
    })
}

export async function insertUser(user) {
    return prisma.user.create({
        data: {
            email: user.email,
            name: user.name,
            nickname: user.nickname,
            password: user.password,
            birthday: new Date(user.birthday).toISOString()
        }
    })
}

export async function findUsers() {
    return prisma.user.findMany()
}