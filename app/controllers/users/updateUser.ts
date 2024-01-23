import { ControllerFunction } from "./../../types/ControllerFunction";
import Users from "../../services/usersRequests";
import createHttpError from "../../helpers/createHttpError";

export const updateUser: ControllerFunction = async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;
  const user = await Users.findById(userId);
  if (!user) {
    throw createHttpError(404, "User not found");
  }
  Object.assign(user, updatedUser);
  await user.save();
  res.status(200).json(user);
};
