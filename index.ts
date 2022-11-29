import express from "express";
import connect from "./src/config/config"
import cors from "cors"
import todoRoute from "./src/route/todo-route"
import bodyParser from "body-parser";
const port = 8080;
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.use("/todo", todoRoute);
console.log("inside index")

app.listen(port, () => {
    connect();
    console.log(`server running on ${port}`);
})
