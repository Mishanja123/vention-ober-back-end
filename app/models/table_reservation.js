const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const TableReservation = sequelize.define("table_reservation", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  guests: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  reservation_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  reservation_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  with_preorder: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = TableReservation;
