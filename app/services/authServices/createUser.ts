import User from "../../models/user";
import UserCredentials from "../../models/userCredentials";
import bcrypt from "bcryptjs";
import createHttpError from "../../helpers/createHttpError";
import { IUserData } from "../../interfaces/Auth/Auth";
import authMessages from "../../messages/authMessages";

export const createUser = async (data: IUserData) => {
  const { first_name, last_name, email, phone, password } = data;

  // Check if the user already exists
  const existingUser = await User.findOne({ where: { email: email } });

  if (existingUser) {
    throw createHttpError(409, authMessages.EMAIL_ALREADY_EXISTS_MESSAGE);
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create user credentials
  const userCredentials = await UserCredentials.create({
    password: hashedPassword,
    role: "user",
  });

  // Create the user
  const userCreated = await User.create({
    first_name,
    last_name,
    email,
    phone,
    // @ts-ignore
    userCredentialsId: userCredentials.id,
  });

  // Create a cart for the user
  // @ts-ignore
  await userCreated.createCart({
    // @ts-ignore
    userId: userCreated.id,
    total: 0,
    subTotal: 0,
    dishes: [],
  });

  return authMessages.USER_SUCCESFULLY_CREATED_MESSAGE;
};

export default createUser;
