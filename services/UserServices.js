import {User} from '../models/index.js';
//import User from '../models/User.js';
import bcrypt from "bcrypt";

class UserServices {

    getAllUserService = async () => {
        return await User.findAll();
    }

    getUserById = async (id) => {
        return await User.findByPk(id);
    }

    createUser = async (user) => {
        return await User.create(user);
        //return {agregado:"falso"}
    }

    updateUser = async () => {
        //stand by
    }

    deleteUser = async () => {
        //stand by  
    }

    hashCheck = async (data) => {
        
        //standBy
    }
}

export default UserServices;

