import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database";
import cors from "cors";
import cookieParser from "cookie-parser";
import User from "./app/models/user";
import UserAddress from "./app/models/user_address";
import UserCreditCard from "./app/models/user_credit_card";
import CreditCard from "./app/models/credit_card";
import Order from "./app/models/order";
import TableReservation from "./app/models/table_reservation";
import Table from "./app/models/table";
import OrderDish from "./app/models/order_dish";
import Dish from "./app/models/dish";
import Payment from "./app/models/payment";
import Address from "./app/models/address";
import dishData from "./data/menuData/dishMoreInfo.json";

const app = express();
app.use(cors());
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
User.hasOne(UserCreditCard);
UserCreditCard.hasMany(User);
UserCreditCard.hasMany(CreditCard);
UserCreditCard.hasOne(Payment);
Payment.belongsTo(UserCreditCard);
CreditCard.hasOne(UserCreditCard);
User.hasMany(Order);
Order.hasOne(User);
Order.hasOne(TableReservation);
TableReservation.belongsTo(Order);
Order.hasMany(OrderDish);
OrderDish.hasOne(Order);
OrderDish.hasOne(Dish);
Order.hasOne(Payment);
Payment.belongsTo(Order);
Dish.belongsTo(OrderDish);
User.hasMany(TableReservation);
TableReservation.hasOne(User);
TableReservation.hasMany(Table);
Table.hasOne(TableReservation);

//to add all data to db type in terminal:
//curl -X POST -H "Content-Type: application/json" http://localhost:3000/createTestDish
app.post("/createTestDish", async (req: Request, res: Response) => {
  try {
    await Promise.all(
      dishData.map(async (dish) => {
        await Dish.create({ ...dish, category: "chefs_pick" });
      })
    );

    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.error("Error creating test dish:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

import authRoutes from "./app/routes/auth";
import dishRouter from "./app/routes/dish";

app.use("/api/auth", authRoutes);
app.use("/api/dishes", dishRouter);

const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synchronization successful");

<<<<<<< Updated upstream
    await User.create({
      first_name: "Rosty",
      last_name: "Bez",
      email: "test@gmail.com",
      phone: "47844994",
      password: "qwerty",
      role: "user"
    });
=======
    // await User.create({
    //   first_name: "Rosty",
    //   last_name: "Bez",
    //   email: "test@gmail.com",
    //   phone: "47844994",
    //   password: "qwerty",
    //   role: "user",
    // });
>>>>>>> Stashed changes
    // Now you can start your server
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

startServer();
