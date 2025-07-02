import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";


//data podemos pasarlo dentro de un objeto
export const generateToken = (data) => {
    const token = jwt.sign(data, SECRET);
    return token;
}