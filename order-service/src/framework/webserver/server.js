const serverConfig = (server, config) => {
  const startServer = () => {
    server.listen(config.port, () => {
      console.log("Order Service Listening on 3003");
    });
  };
  return {
    startServer,
  };
};

export default serverConfig
