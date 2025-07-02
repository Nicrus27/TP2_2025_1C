import express from "express";
import allRoutes from "./routes/allRoutes.js";
import connection from "./connection/connection.js";
import {SERVER_PORT} from "./config/config.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use(allRoutes)



await connection.sync({force:false})

app.listen(SERVER_PORT, () => {
    console.log(
        `server ${SERVER_PORT} online`
    );
})