const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const UserAddress = sequelize.define("user_address", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = UserAddress;
