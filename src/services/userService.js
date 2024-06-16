const userRepository = require ('../repositories/userRepository')
const createUser = async (data) => {
    return await userRepository.createUser(data)
}
module.exports = {
    createUser
}