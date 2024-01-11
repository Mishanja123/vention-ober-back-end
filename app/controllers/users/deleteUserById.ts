import { ControllerFunction } from "./../../types/ControllerFunction";
import Users from "../../services/usersRequests";

export const deleteUserById: ControllerFunction = async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  await Users.deleteById(userId);
  const users = await Users.getAll();
  res.status(200).json({ updatedList: users });
};
