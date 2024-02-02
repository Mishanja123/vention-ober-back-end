import { ControllerFunction } from "./../../types/ControllerFunction";

import { UserHandlers } from "../../services/userService";

export const deleteUserById: ControllerFunction = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  await UserHandlers.deleteUserById(id);
  const users = await UserHandlers.getAllUsers();
  res.status(200).json({ updatedList: users });
};
