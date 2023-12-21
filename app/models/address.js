const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const Adress = sequelize.define("adress", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  house_number: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  unit: {
    type: Sequelize.STRING(10),
  },
  flat_number: {
    type: Sequelize.STRING(10),
  },
});

module.exports = Adress;
