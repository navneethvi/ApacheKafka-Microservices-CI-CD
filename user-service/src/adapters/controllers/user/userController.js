import registerUser from "../../../application/usecases/user/register.js";
import loginUser from "../../../application/usecases/user/login.js";

const userController = (
  userRepositoryInt,
  userRepositoryImp,
  userServiceInt,
  userServiceImp
) => {
  
  const repositories = userRepositoryInt(userRepositoryImp());
  const services = userServiceInt(userServiceImp());

  const createUser = async (req, res) => {
    console.log("heree at createuser controller");
    console.log(req.body);
    const { username, email, password } = req.body;
    try {
      let response = await registerUser(
        username,
        email,
        password,
        repositories,
        services
      );
      console.log("response is here at usercreate controller : ", response);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Error in createUser controller" });
    }
  };

  const login = async (req, res) => {
    console.log("heree at loginuser controller");
    console.log(req.body);
    const { email, password } = req.body;
    try {
      console.log(email, password);
      const response = await loginUser(email, password, repositories, services);
      console.log(response, "response coming controller");
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ error: "Error in login controller" });
    }
  };

  return {
    createUser,
    login,
  };
};

export default userController;
