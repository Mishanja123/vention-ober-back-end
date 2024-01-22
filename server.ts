import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./app/models/associations";

import Dish from "./app/models/dish";

import dishData from "./data/menuData/dishMoreInfo.json";
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
app.use(bodyParser.urlencoded({ extended: true }));

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Success");
  } catch (err) {
    console.log("Unable ", err);
  }
}

connect();

//to add all data to db type in terminal:
//curl -X POST -H "Content-Type: application/json" http://localhost:3000/createTestDish
app.post("/createTestDish", async (req: Request, res: Response) => {
  try {
    await Promise.all(
      dishData.map(async (dish) => {
        await Dish.create({
          ...dish,
          category: dish.category as
            | "sunrise_specials"
            | "chefs_pick"
            | "culinary_classics"
            | "bar_bliss",
        });
      })
    );

    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

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
