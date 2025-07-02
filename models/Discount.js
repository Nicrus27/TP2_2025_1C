import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Discount extends Model{

}

Discount.init({
    discName: {
      type: DataTypes.STRING(50),
      allowNull:false,
      primaryKey:true
    },
    discAmount: {
        type: DataTypes.DOUBLE(10,2),
        allowNull:false
    }
},{
    sequelize: connection,
    modelName: "Discount"
})

export default Discount;