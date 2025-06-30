import User from "./User.js"
import Role from "./Role.js"

Role.hasMany(User);
User.belongsTo(Role);

export {
    User,
    Role
}