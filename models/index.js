import User from "./User.js"
import Role from "./Role.js"
import Product from "./Product.js";
import UserProducts from "./UserProducts.js";

Role.hasMany(User);
User.belongsTo(Role);

User.belongsToMany(Product, {through: UserProducts});
Product.belongsToMany(User, {through: UserProducts});

export {
    User,
    Role,
    Product,
    UserProducts
}