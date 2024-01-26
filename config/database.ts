import { Sequelize } from "sequelize";

const sequelize = new Sequelize("obar_be", "postgres", "26031996Vbif", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

export default sequelize;
