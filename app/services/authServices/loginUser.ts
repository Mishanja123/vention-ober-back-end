import User from "../../models/user";
import UserCredentials from "../../models/userCredentials";
import bcrypt from "bcryptjs";
import createHttpError from "../../helpers/createHttpError";
import { IUserData } from "../../interfaces/Auth/Auth";
import authMessages from "../../messages/authMessages";

export const loginUser = async ({
  email,
  password,
}: Pick<IUserData, "email" | "password">): Promise<
  Pick<IUserData, "firstName" | "id">
> => {
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

  const doMatch = await bcrypt.compare(password, userCredentials.password);

  if (!doMatch) {
    throw createHttpError(401, authMessages.WRONG_CREDENTIALS_PROVIDED_MESSAGE);
  }

  const { id, firstName } = user.dataValues;

  // Ensure id is not undefined before returning
  if (id === undefined) {
    throw new Error("User id is undefined");
  }

  return { firstName, id };
};
