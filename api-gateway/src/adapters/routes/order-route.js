import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { ORDER_SERVICE_API } from "../../config/config.js";

const orderRoute = express.Router();

orderRoute.use(createProxyMiddleware({
    target : ORDER_SERVICE_API,
    changeOrigin : true
}))

export default orderRoute