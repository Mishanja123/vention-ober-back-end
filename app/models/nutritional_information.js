const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const NutritionalInformation = sequelize.define("nutritional_information", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  protein: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
  },
  fat: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
  },
  carbohydrate: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
  },
  other: {
    type: Sequelize.DECIMAL(5, 2),
  },
});

module.exports = NutritionalInformation;
