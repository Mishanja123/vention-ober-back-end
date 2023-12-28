const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const Table = sequelize.define("table", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  status: {
    type: Sequelize.ENUM("free", "reserved"),
    allowNull: false,
  },
  seats: {
    type: Sequelize.ENUM("4", "6", "8"),
    allowNull: false,
  },
});

module.exports = Table;
