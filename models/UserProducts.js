import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class UserProducts extends Model{

}

UserProducts.init({

},{
    sequelize: connection,
    modelName: "UserProducts"
})

export default UserProducts;

/*
    mail: {
      type: DataTypes.STRING(50),
      allowNull:false
    },
    model: {
      type: DataTypes.STRING(50),
      allowNull:false
    }
*/