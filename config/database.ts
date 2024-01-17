import { Sequelize } from "sequelize";

const sequelize = new Sequelize("obar_be", "postgres", "admin", {
  dialect: "postgres",
  host: "localhost", 
  port: 5433,
});

export default sequelize;
