import {User} from '../models/index.js';
import { generateToken } from '../utils/jwt.js';

class UserServices {

    getAllUserService = async () => {
        return await User.findAll();
    }

    getUserById = async (id) => {
        return await User.findByPk(id);
    }

    createUser = async (user) => {
        //console.log("llega?")
        return await User.create(user);
    }

    /*
    updateUser = async () => {
        //stand by
    }

    deleteUser = async () => {
        //stand by  
    }
    */

    login = async (data) => {
        const {mail, pass} = data;
        const user = await User.findOne({
            where: {
                mail
            }
        });
        if (!user) throw new Error ("User not found");
        const comparePass = await user.compare(pass)
        if (!comparePass) throw new Error ("contraseña incorrecta");
        const payload = {
            id: user.id,
            name: user.name
        };
        const token = generateToken(payload);
        return token;
    }


    /*

    hashCheck = async (data) => {
        
        //standBy
    }
    */
}

export default UserServices;

