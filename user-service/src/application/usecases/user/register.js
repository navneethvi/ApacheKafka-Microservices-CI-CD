import userData from "../../../entities/user/userEntities.js";

const registerUser = async (
  username,
  email,
  password,
  repositories,
  services
) => {
  try {
    console.log(`Attempting to register user with email: ${email}`);

    const existingUser = await repositories.userExist(email);
    if (existingUser) {
      console.log("User with this email already exists");
      return { status: false, message: "User with this email already exists" };
    }

    console.log("User does not exist, proceeding with registration");

    const hashedPassword = await services.bcryptPassword(password);
    console.log("Password hashed successfully");

    const userDetails = {
      username,
      email,
      password: hashedPassword,
    };

    const createdUser = await repositories.createUser(userDetails);
    console.log("User created successfully");

    const registeredUser = {
      _id: createdUser._id,
      username: createdUser.username,
      email: createdUser.email,
    };

    const accessToken = await services.createAccessToken(registeredUser);
    console.log("Access token generated");

    return {
      status: true,
      accessToken,
      userInfo: registeredUser,
    };
  } catch (error) {
    console.error("Error during user registration:", error);
    return { status: false, message: "An error occurred during registration" };
  }
};

export default registerUser;
