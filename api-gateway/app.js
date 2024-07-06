import createServer from "./src/framework/express/express.js";

const app = createServer()

const PORT = 3000 || process.env.PORT

app.listen(PORT, ()=>{
    console.log("API Gateway is Running on 3000!!!");
})