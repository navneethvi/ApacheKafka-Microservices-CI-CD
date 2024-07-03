import userRouter from "./user/userRouter.js";

const routes = (app, express) => {
    app.use('/api/users', userRouter(express))
}

export default routes