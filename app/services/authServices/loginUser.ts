import User from "../../models/user";
import UserCredentials from "../../models/userCredentials";
import bcrypt from "bcryptjs";
import createHttpError from "../../helpers/createHttpError";
import { IUserData } from "../../interfaces/Auth/Auth";
import authMessages from "../../messages/authMessages";

export const loginUser = async (
  data: Pick<IUserData, "email" | "password">
) => {
  const { email, password } = data;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw createHttpError(401, authMessages.INVALID_CREDENTIALS_MESSAGE);
  }

  const userCredentials = await UserCredentials.findOne({
    where: { id: user.dataValues.userCredentialsId },
  });

  if (!userCredentials) {
    throw createHttpError(401, authMessages.NO_CREDENTIALS_FOUND_MESSAGE);
  }
  // @ts-ignore
  const doMatch = await bcrypt.compare(password, userCredentials.password);

  if (!doMatch) {
    throw createHttpError(401, authMessages.WRONG_CREDENTIALS_PROVIDED_MESSAGE);
  }

  return user;
};
