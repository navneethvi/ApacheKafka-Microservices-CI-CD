import express from "express";
import cors from "cors";

import { orderRoute, userRoute, productRoute } from "../../adapters/routes/index.js";

const createServer = () => {
    const app = express()

    app.use(cors())

    app.use('/api/users', userRoute)
    app.use('/api/products', productRoute)
    app.use('/api/orders', orderRoute)

    return app
}

export default createServer