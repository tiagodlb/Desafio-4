import * as userRepository from '../src/repositories/userRepository.js'
import { prisma } from '../src/database.js'
import { userFactory } from '../factories/userFactory.js'

async function main() {
    const user = await userFactory()
    await populateUser(user)
}

async function populateUser(user) {
    await userRepository.insertUser({
        data: user
    })
}

function errorUtil(e) {
    console.dir('You probably already have the seed data!');
    console.log(e);
}

main()
    .catch(e => {
        errorUtil(e)
        process.exit(1)
    })
    .finally(() => {
        prisma.$disconnect()
    })
