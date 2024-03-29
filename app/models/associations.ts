import User from "./user";
import UserAddress from "./userAddress";
import Order from "./order";
import TableReservation from "./tableReservation";
import Table from "./table";
import Payment from "./payment";
import Address from "./address";
import UserCredentials from "./userCredentials";
import Cart from "./cart";
import Dish from "./dish";

User.hasOne(UserAddress);
UserAddress.hasMany(User);
UserAddress.hasMany(Address);
Address.hasOne(UserAddress);
User.hasMany(Order, { onDelete: "CASCADE" });
Order.hasOne(User);
Order.hasOne(TableReservation, { onDelete: "CASCADE" });
TableReservation.belongsTo(Order);
Order.hasOne(Payment);
Payment.belongsTo(Order);
User.hasMany(TableReservation);
TableReservation.hasOne(User);
TableReservation.hasMany(Table, { onDelete: "CASCADE" });
Table.hasOne(TableReservation);
User.hasOne(UserCredentials, { foreignKey: "id", onDelete: "CASCADE" });
User.hasOne(Cart, { onDelete: "CASCADE" });
Cart.belongsTo(User);
Cart.hasMany(Dish);
