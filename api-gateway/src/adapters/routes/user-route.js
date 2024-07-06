import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import isLogin from "../middleware/auth.js";
import { USER_SERVICE_API } from "../../config/config.js";

const userRoute = express.Router();

console.log("hittedddd");

userRoute.use(createProxyMiddleware({
    target : USER_SERVICE_API,
    changeOrigin : true,
    pathRewrite: {
        '^/api/users': '', // Removes /api/users from the path
    }
}))

export default userRoute