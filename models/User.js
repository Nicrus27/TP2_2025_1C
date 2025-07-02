import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model{
    compare = async (pass) => {
        const comparePass = await bcrypt.compare(pass, this.pass);
        return comparePass;
    }
}

User.init({
    name:DataTypes.STRING(50),
    mail: {
        type: DataTypes.STRING,
        allowNull:false,
        mail: true
    },
    pass:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: "User"
})


User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.pass, salt);
    //console.log(hash);
    user.pass = hash;
})


export default User;