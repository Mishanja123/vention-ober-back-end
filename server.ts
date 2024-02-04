import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./app/models/associations";

import { uploadInitialDishes } from "./app/controllers/dishes/uploadInitialDishes";
import { registerRoutes } from "./app/utils/registerRoutes";
import { HttpError } from "./app/helpers/createHttpError";

require("dotenv").config();
const app = express();

app.use(
  cors({
    exposedHeaders: "Authorization",
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Success");
  } catch (err) {
    console.log("Unable ", err);
  }
}

connect();

// Initial dishes list
app.post("/createTestDish", uploadInitialDishes);

// Register routes using the registerRoutes function
registerRoutes(app);

// Error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

startServer();
