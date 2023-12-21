const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const UserCreditCard = sequelize.define("userCreditCard", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = UserCreditCard;
