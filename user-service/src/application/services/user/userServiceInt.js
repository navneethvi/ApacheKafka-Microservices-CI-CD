const userServiceInt = (repositories) => {
    console.log("here at userSvcInt");
    const bcryptPassword = (password) => repositories.bcryptPassword(password)
    const createAccessToken = (user) => repositories.createAccessToken(user)
    const comparePassword = (password, userPassword) => repositories.comparePassword(password, userPassword)

    return {
        bcryptPassword,
        createAccessToken,
        comparePassword
    }
}

export default userServiceInt