const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const Payment = sequelize.define("payment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: Sequelize.ENUM("offline", "online"),
    allowNull: false,
  },
  updateDate: {
    type: Sequelize.DATE,
  },
  status: {
    type: Sequelize.ENUM("pending", "failed", "succeed"),
    allowNull: false,
  },
});

module.exports = Payment;
