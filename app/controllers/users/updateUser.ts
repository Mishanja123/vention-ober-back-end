import { ControllerFunction } from "./../../types/ControllerFunction";
import Users from "../../services/usersRequests";
import createHttpError from "../../helpers/createHttpError";
import S3Service from "../../services/S3Service";

export const updateUser: ControllerFunction = async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const user = await Users.findById(userId);
  if (!user) {
    throw createHttpError(404, "User not found");
  }
  const avatar = await S3Service.getUserPresignedUrl(userId);
  console.log(avatar);
  const updatedUser = { avatar, ...req.body };
  Object.assign(user, updatedUser);
  console.log(user);
  await user.save();
  res.status(200).json(user);
};
