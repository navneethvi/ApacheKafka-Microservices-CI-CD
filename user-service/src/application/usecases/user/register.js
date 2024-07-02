import userData from "../../../entities/user/userEntities.js";

const registerUser = async (username, email, password, repository, userService) => {
    try {
        const user = await repository.userExist(email)
        if(!user){
            console.log("Success");
            const hashedPassword = await repository.bcryptPassword(password)
            const userDetails = userData(username, email, hashedPassword)
            const createUser = await repository.createUser(userDetails)
            const registeredUser = {
                _id : createUser._id,
                username : createUser.username,
                email : createUser.email
            }
            const accessToken = await userService.createAccessToken(registeredUser)
            return ({status : true, accessToken : accessToken, userInfo : registerUser, createUser})

        }else{
            return ({message : "User with this email is already exists"})
        }
    } catch (error) {
        console.log(error.message);
    }
}

export default registerUser