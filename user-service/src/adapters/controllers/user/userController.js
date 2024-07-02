// import registerUser from "../../../applications/usecases/user/register.js";
import registerUser from "../../../application/usecases/user/register.js";

const userController = (
  userRepositoryInt,
  userRepositoryImp,
  userServiceInt,
  userServiceImp
) => {
  const dbRepository = userRepositoryInt(userRepositoryImp());
  const userService = userRepositoryInt(userRepositoryImp());

  const createUser = async (req, res) => {
    console.log("heree at createuser controller");
    console.log(req.body);
    const { username, email, password } = req.body;
    try {
      let response = await registerUser(
        username,
        email,
        password,
        dbRepository,
        userService
      );
      console.log("response is here at usercreate controller : ", response);
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ error: "Error in createUser controller" });
    }
  };

  return {
    createUser
  }
};

export default userController