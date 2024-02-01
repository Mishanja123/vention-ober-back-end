import { ControllerFunction } from "../../types/ControllerFunction";

import createHttpError from "../../helpers/createHttpError";

import { UserHandlers } from "../../services/userService";

import userMesseges from "../../messages/userMessages";

export const getUserById: ControllerFunction = async (req, res, next) => {
  const { id } = req.user!;
  const user = await UserHandlers.getUserById(id);
  if (!user) {
    throw createHttpError(404, userMesseges.USER_NOT_FOUND_MESSAGE);
  }

  const userCredentials = await UserHandlers.getUserCredentialsById(id);

  res.status(200).json({ user, userCredentials });
};
