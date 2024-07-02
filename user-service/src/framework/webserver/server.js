const serverConfig = (server, config) => {
    const startServer = () => {
        server.listen(config.port, () => {
            console.log("User Service Listening on 3000");
        })
    }
    return {
        startServer
    }
}

export default serverConfig