const serverConfig = (server, config) => {
    const startServer = () => {
        server.listen(config.port, () => {
            console.log("Product Service Listening on 3002");
        })
    }
    return {
        startServer
    }
}

export default serverConfig