import User from "../../models/user";
import UserCredentials from "../../models/user_credentials";
import bcrypt from "bcryptjs";
import createHttpError from "../../helpers/createHttpError";
import { IUserData } from "../../interfaces/Auth/Auth";

export const loginUser = async (
  data: Pick<IUserData, "email" | "password">
) => {
  try {
    const { email, password } = data;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw createHttpError(401, "Invalid credentials");
    }

    const userCredentials = await UserCredentials.findOne({
      where: { id: user.dataValues.userCredentialsId }
    });

    if (!userCredentials) {
      throw createHttpError(401, "User credentials not found");
    }
    // @ts-ignore
    const doMatch = await bcrypt.compare(password, userCredentials.password);

    if (!doMatch) {
      throw createHttpError(401, "Wrong password or email");
    }

    return user;
  } catch (error) {
    // Handle errors and return a more informative response
    // @ts-ignore
    if (error.name === "SequelizeValidationError") {
      // Validation error from Sequelize (if any)
      // @ts-ignore
      throw createHttpError(400, "Validation error: " + error.message);
    } else {
      // Handle other errors
      throw createHttpError(500, "Internal Server Error");
    }
  }
};
