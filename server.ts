import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database";
import cors from "cors";
import cookieParser from "cookie-parser";
import User from "./app/models/user";
import UserAddress from "./app/models/user_address";
import Order from "./app/models/order";
import TableReservation from "./app/models/table_reservation";
import Table from "./app/models/table";
import OrderDish from "./app/models/order_dish";
import Dish from "./app/models/dish";
import Payment from "./app/models/payment";
import Address from "./app/models/address";
import UserCredentials from "./app/models/user_credentials";
import Cart from "./app/models/cart";
import dishData from "./data/menuData/dishMoreInfo.json";
import { registerRoutes } from "./app/utils/registerRoutes";

require("dotenv").config();
const app = express();

app.use(
  cors({
    exposedHeaders: "Authorization",
    credentials: true,
    origin: true
  })
);
app.use(cookieParser());
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Success");
  } catch (err) {
    console.log("Unable ", err);
  }
}

connect();

User.hasOne(UserAddress);
UserAddress.hasMany(User);
UserAddress.hasMany(Address);
Address.hasOne(UserAddress);
User.hasMany(Order);
Order.hasOne(User);
Order.hasOne(TableReservation, { onDelete: 'CASCADE' });
TableReservation.belongsTo(Order);
Order.hasMany(OrderDish);
OrderDish.hasOne(Order);
OrderDish.hasOne(Dish);
Order.hasOne(Payment);
Payment.belongsTo(Order);
Dish.belongsTo(OrderDish);
User.hasMany(TableReservation);
TableReservation.hasOne(User);
TableReservation.hasMany(Table, { onDelete: "CASCADE" });
Table.hasOne(TableReservation);
User.hasOne(UserCredentials, { foreignKey: "id", onDelete: "CASCADE" });
User.hasOne(Cart);
Cart.belongsTo(User);

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
            | "bar_bliss"
        });
      })
    );

    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

import authRoutes from "./app/routes/auth";
import createHttpError, { HttpError } from "./app/helpers/createHttpError";

app.use("/api/auth", authRoutes);

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
    await sequelize.sync({ force: true });
    console.log("Database synchronization successful");
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

startServer();
