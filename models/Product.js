import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model{

}

Product.init({
    brand: {
      type: DataTypes.STRING(50),
      allowNull:false
    },
    type: {
        type: DataTypes.STRING(50)
    },
    model: {
        type: DataTypes.STRING(50)
    },
    description: {
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.FLOAT(10, 2)
    },
    warranty:{
        type: DataTypes.INTEGER(2)
    }
},{
    sequelize: connection,
    modelName: "Product"
})

export default Product;