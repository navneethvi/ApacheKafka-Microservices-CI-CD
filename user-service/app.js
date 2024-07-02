import http from 'http'
import express from 'express'

import config from './src/config/config.js'
import connectDB from './src/framework/database/connection.js'
import serverConfig from './src/framework/webserver/server.js'
import expressConfig from './src/framework/webserver/express.js'
import routes from './src/framework/webserver/routes/index.js'


const app = express()

const server = http.createServer(app)

connectDB(config)

expressConfig(app)

serverConfig(app)

routes(app, express)

serverConfig(server, config).startServer()