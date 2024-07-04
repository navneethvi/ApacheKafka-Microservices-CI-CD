import bcrypjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userServiceImp = () => {
  const bcryptPassword = async (password) => {
    console.log("password is here for hashing : ", password);
    const salt = bcrypjs.genSaltSync(10);
    const hashPassword = bcrypjs.hashSync(password, salt);
    console.log("password hashed : ", hashPassword);
    return hashPassword;
  };

  const createAccessToken = async (user) => {
    const accessToken = jwt.sign(user, "jwtsecretkey", { expiresIn: "1d" });
    console.log("access token created : ", accessToken);
    return accessToken;
  };

  const comparePassword = async (password, userPassword) => {
    console.log("pass", password,"===============x", userPassword);
    return bcrypjs.compare(password, userPassword);
  };

  return {
    bcryptPassword,
    createAccessToken,
    comparePassword,
  };
};

export default userServiceImp;
