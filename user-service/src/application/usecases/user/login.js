const loginUser = async (email, password, repositories, services) => {
  try {
    console.log(`Attempting to login user with email: ${email}`);

    const user = await repositories.userExist(email);
    if (!user) {
      console.log("User not found");
      return { status: false, message: "Invalid Credentials!!!" };
    }
    console.log(`User found: ${user.email}`);

    const isPassword = await services.comparePassword(password, user.password);
    if (!isPassword) {
      console.log("Password is invalid");
      return { status: false, message: "Password Invalid!!!" };
    }

    const userdata = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };
    const accessToken = await services.createAccessToken(userdata);
    console.log("Login successful, access token generated");

    return { status: true, accessToken: accessToken, userInfo: userdata };
  } catch (error) {
    console.error("Error during login:", error);
    return { status: false, message: "An error occurred during login" };
  }
};

export default loginUser;
