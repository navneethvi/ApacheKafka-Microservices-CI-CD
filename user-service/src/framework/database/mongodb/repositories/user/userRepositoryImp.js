import User from "../../models/userModel/userSchema.js";

const userRepositoryImp = () => {

    const userExist = async (email) =>  await User.findOne({email})

    const createUser = async (user) => {
        const newUser =  new User({
            username : user?.getUsername(),
            email : user?.getEmail(),
            password : user?.getPassword()
        })
        console.log("User in userRepoImp : ", newUser);
        try {
            const savedUser = await newUser.save();
            console.log("Saved user:", savedUser);
            return savedUser;
        } catch (error) {
            console.error("Error saving user:", error);
            throw error;
        }
    }
    return {
        userExist,
        createUser
    }
}

export default userRepositoryImp