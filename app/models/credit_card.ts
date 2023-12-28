const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const CreditCard = sequelize.define("credit_card", {
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
  card_number: {
    type: Sequelize.STRING(16),
    allowNull: false,
  },
  expire_month: {
    type: Sequelize.SMALLINT,
    allowNull: false,
  },
  expire_year: {
    type: Sequelize.SMALLINT,
    allowNull: false,
  },
  card_code: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  name_on_card: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = CreditCard;
