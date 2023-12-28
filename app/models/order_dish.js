const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const OrderDish = sequelize.define("order_dish", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  subtotal: {
    type: Sequelize.DECIMAL(10, 2),
  },
});

module.exports = OrderDish;
