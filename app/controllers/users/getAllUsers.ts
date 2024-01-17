import { ControllerFunction } from "./../../types/ControllerFunction";
import Users from "../../services/usersRequests";

export const getAllUsers: ControllerFunction = async (req, res, next) => {
  const users = await Users.getAll();
  res.status(200).json({ users });
};
