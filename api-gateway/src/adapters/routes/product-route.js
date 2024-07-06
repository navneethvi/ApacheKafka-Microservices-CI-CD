import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import isLogin from "../middleware/auth.js";
import { PRODUCT_SERVICE_API } from "../../config/config.js";

const productRoute = express.Router();

productRoute.use(createProxyMiddleware({
    target : PRODUCT_SERVICE_API,
    changeOrigin : true,
}))

export default productRoute