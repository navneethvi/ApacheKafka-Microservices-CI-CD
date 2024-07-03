import productRouter from "./product/productRouter.js";

const routes = (app, express) => {
  app.use("/api/products", productRouter(express));
};

export default routes;
