import http from 'http'
import express from 'express'

import connectDB from './src/framework/database/connection.js'
import expressConfig from './src/framework/webserver/express.js'
import serverConfig from './src/framework/webserver/server.js'
import orderConsumer from './src/events/orderConsumer.js'
import config from './src/config/config.js'
import routes from './src/framework/webserver/routes/index.js'

const app = express()

const server = http.createServer(app)

connectDB(config)

expressConfig(app)

routes(app, express)

serverConfig(server, config)

await orderConsumer()