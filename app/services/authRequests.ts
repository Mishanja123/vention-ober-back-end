import User from "../models/user";
import UserCredentials from "../models/userCredentials";
import bcrypt from "bcryptjs";
import createHttpError from "../helpers/createHttpError";
import { UserRole } from "../enums/User";

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

const authentication = {
  createUser: async (data: UserData) => {
    const { first_name, last_name, email, phone, password } = data;

    const user = await User.findOne({ where: { email: email } });

    if (user) {
      throw createHttpError(409, "Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const userCredentials = await UserCredentials.create(
      {
        password: hashedPassword,
        role: UserRole.User,
      },
      { fields: ["password", "role"] }
    );

    const userCreated = await User.create({
      first_name,
      last_name,
      email,
      phone,
      userCredentialsId: userCredentials.dataValues.id,
    });

    // @ts-ignore
    await userCreated.createCart({
      // @ts-ignore
      userId: userCreated.id,
      total: 0,
      subTotal: 0,
      dishes: [],
    });

    return "Signup successful";
  },
  loginUser: async (data: Pick<UserData, "email" | "password">) => {
    const { email, password } = data;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      throw createHttpError(401, "Invalid credentials");
    }

    const userCredentials = await UserCredentials.findOne({
      where: { id: user.dataValues.userCredentialsId },
    });

    if (!userCredentials) {
      throw createHttpError(401, "User credentials not found");
    }

    const doMatch = await bcrypt.compare(
      password,
      userCredentials.dataValues.password
    );

    if (!doMatch) {
      throw createHttpError(401, "Wrong password or email");
    }

    return user;
  },
};

export default authentication;
