import User from "../../models/userModel/userSchema.js";

const userRepositoryImp = () => {
    const userExist = async (email) => await User.findOne({email : email})

    const createUser = async (user) => {
        const newUser = await new User({
            username : user?.getUsername(),
            email : user?.getEmail(),
            password : user?.getPassword()
        })
        console.log("User in userRepoImp : ", createUser);
        return createUser.save()
    }
    return {
        userExist,
        createUser
    }
}

export default userRepositoryImp