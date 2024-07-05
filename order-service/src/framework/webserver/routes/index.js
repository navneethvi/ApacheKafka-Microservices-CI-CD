import orderRouter from "./order/ordeRouter.js";

const routes = (app, express) => {
    app.use('/api/orders', orderRouter(express))
}

export default routes