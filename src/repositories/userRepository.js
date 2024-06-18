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
        data: user
    })
}

export async function findUsers() {
    return prisma.user.findMany()
}