const express = require("express");
const sequelize = require("./config/database");
const User = require("./app/models/user");
const UserAddress = require("./app/models/user_address");
const UserCreditCard = require("./app/models/user_credit_card");
const CreditCard = require("./app/models/credit_card");
const Order = require("./app/models/order");
const TableReservation = require("./app/models/table_reservation");
const Table = require("./app/models/table");
const OrderDish = require("./app/models/order_dish");
const Dish = require("./app/models/dish");
const Payment = require("./app/models/payment");
const Address = require("./app/models/address");
const dishData = require("./data/menuData/dishMoreInfo.json");
const bodyParser = require("body-parser");

const app = express();
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
app.post("/createTestDish", async (req, res) => {
  try {
    await Promise.all(
      dishData.map(async (dish) => {
        await Dish.create({ ...dish, category: "chefs_pick" });
      })
    );

    // Create the test dish in the database

    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.error("Error creating test dish:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const authRoutes = require("./app/routes/auth");

app.use(authRoutes);

sequelize
  .sync()
  .then(
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    })
  )
  //if you have no user created in db -> uncomment

  // .then(() => {
  // User.create({
  //   first_name: "Rost",
  //   last_name: "Test",
  //   email: "test@gmail.com",
  //   phone: "111111111",
  //   password: "qwerty",
  //   role: "user",
  // });
  // })
  .catch((err) => console.log(err));
