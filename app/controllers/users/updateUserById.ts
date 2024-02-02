import { ControllerFunction } from "../../types/ControllerFunction";
import createHttpError from "../../helpers/createHttpError";

import { UserHandlers } from "../../services/userService";
import { S3ServiceHandlers } from "../../services/S3Services";

import userMesseges from "../../messages/userMessages";

export const updateUserById: ControllerFunction = async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const user = await UserHandlers.getUserById(userId);
  if (!user) {
    throw createHttpError(404, userMesseges.USER_NOT_FOUND_MESSAGE);
  }

  const avatar = await S3ServiceHandlers.getUserPresignedUrlByUserId(userId);

  const updatedUser = { avatar, ...req.body };
  Object.assign(user, updatedUser);
  await user.save();
  res.status(200).json(user);
};
