// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize("obar_be", "postgres", "admin", {
//   dialect: "postgres",
//   host: "host.docker.internal", //host.docker.internal
//   port: 5433,
// });

// export default sequelize;
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("obar_be", "postgres", "26031996Vbif", {
  dialect: "postgres",
  host: "host.docker.internal", //host.docker.internal
  port: 5432,
});

export default sequelize;
