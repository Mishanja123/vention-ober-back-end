const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: Sequelize.ENUM(
      "reservation",
      "reservation_with_preorder",
      "take_away",
      "delivery"
    ),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM(
      "active",
      "paid",
      "will_be_paid",
      "completed",
      "canceled"
    ),
    allowNull: false,
  },
  user_address_id: {
    type: Sequelize.STRING,
  },
  order_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  update_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Order;
