const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const Dish = sequelize.define("dish", {
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
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  photo_path: {
    type: Sequelize.STRING,
  },
  ingredients: {
    type: Sequelize.JSONB,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM(
      "sunrise_specials",
      "culinary_classics",
      "bar_bliss",
      "chefs_pick"
    ),
    allowNull: false,
  },
  weight_grams: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  create_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updated_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Dish;
