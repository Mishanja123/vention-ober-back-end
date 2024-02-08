import { ControllerFunction } from "../../interfaces/ControllerFunction";

import { UserHandlers } from "../../services/userService";

export const getAllUsers: ControllerFunction = async (req, res, next) => {
  const users = await UserHandlers.getAllUsers();
  res.status(200).json({ users });
};
