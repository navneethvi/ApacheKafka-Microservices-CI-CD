const userRepositoryInt = (repositories) => {
    const userExist = (email) => repositories.userExist(email)
    const createUser = (user) => repositories.createUser(user)

    return {
        userExist,
        createUser
    }
}

export default userRepositoryInt
    
