import User from "../../models/user";
import UserCredentials from "../../models/user_credentials";
import bcrypt from "bcryptjs";
import createHttpError from "../../helpers/createHttpError";
import { IUserData } from "../../interfaces/Auth/Auth";

export const createUser = async (data: IUserData) => {
  try {
    const { first_name, last_name, email, phone, password } = data;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      throw createHttpError(409, "Email already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user credentials
    const userCredentials = await UserCredentials.create({
      password: hashedPassword,
      role: "user"
    });

    // Create the user
    const userCreated = await User.create({
      first_name,
      last_name,
      email,
      phone,
      // @ts-ignore
      userCredentialsId: userCredentials.id
    });

    // Create a cart for the user
    // @ts-ignore
    await userCreated.createCart({
      // @ts-ignore
      userId: userCreated.id,
      total: 0,
      subTotal: 0,
      dishes: []
    });

    return "Signup successful";
  } catch (error) {
    // Handle errors and return a more informative response
    // @ts-ignore
    if (error.name === "SequelizeValidationError") {
      // @ts-ignore
      throw createHttpError(400, "Validation error: " + error.message);
    } else {
      // Handle other errors
      throw createHttpError(500, "Internal Server Error");
    }
  }
};

export default createUser;
