import User from "../models/user";
import UserCredentials from "../models/user_credentials";
import bcrypt from "bcryptjs";
import UserCredentialsAttributes from "../models/user_credentials";
import createHttpError from "../helpers/createHttpError";

interface Data {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

const Authentication = {
  createUser: async (data: Data) => {
    const { first_name, last_name, email, phone, password } = data;

    const user = await User.findOne({ where: { email: email } });

    if (user) {
      throw createHttpError(409, "Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const userCredentials = await UserCredentials.create(
      {
        password: hashedPassword,
        role: "user"
      } as UserCredentialsAttributes,
      { fields: ["password", "role"] }
    );

    await User.create({
      first_name,
      last_name,
      email,
      phone,
      userCredentialsId: userCredentials.id
    });

    return "Signup successful";
  },
  loginUser: async (data: Pick<Data, "email" | "password">) => {
    const { email, password } = data;

    const user = await User.findOne({ where: { email: email } });
    2;

    if (!user) {
      throw createHttpError(401, "User with provided email doesn't exist");
    }

    const userCredentials = await UserCredentials.findOne({
      where: { id: user.userCredentialsId }
    });

    if (!userCredentials) {
      throw createHttpError(401, "User credentials not found");
    }

    const doMatch = await bcrypt.compare(password, userCredentials.password);

    if (!doMatch) {
      throw createHttpError(401, "Wrong password or email");
    }

    return user;
  }
};

export default Authentication;
