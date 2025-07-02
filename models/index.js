import User from "./User.js"
import Role from "./Role.js"
import Product from "./Product.js";
import UserProducts from "./UserProducts.js";
import Discount from "./Discount.js";

Role.hasMany(User);
User.belongsTo(Role);

Discount.hasMany(Product);
Product.belongsTo(Discount);

User.belongsToMany(Product, {through: UserProducts});
Product.belongsToMany(User, {through: UserProducts});



export {
    User,
    Role,
    Product,
    UserProducts,
    Discount
}