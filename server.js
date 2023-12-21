const express = require("express");
const sequelize = require("./config/database");
const User = require("./app/models/user");
const UserAddress = require("./app/models/user_address");
const adress = require("./app/models/address");
const UserCreditCard = require("./app/models/user_credit_card");
const CreditCard = require("./app/models/credit_card");
const Order = require("./app/models/order");
const TableReservation = require("./app/models/table_reservation");
const Table = require("./app/models/table");
const OrderDish = require("./app/models/order_dish");
const Dish = require("./app/models/dish");
const Payment = require("./app/models/payment");
const Adress = require("./app/models/address");

const app = express();
const PORT = 3000;

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Success");

    await sequelize.sync({ force: false });
  } catch (err) {
    console.log("Unable ", err);
  }
}

connect();

User.hasOne(UserAddress);
UserAddress.hasMany(User);
UserAddress.hasMany(Adress);
Adress.hasOne(UserAddress);
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

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
