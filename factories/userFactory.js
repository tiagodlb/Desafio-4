import { faker } from "@faker-js/faker";

export default async function userFactory() {
    return {
        email: faker.internet.email(),
        name: faker.person.firstName(),
        nickname: faker.internet.userName(),
        password: faker.internet.password(),
        birthday: faker.date.birthdate()
    }
}