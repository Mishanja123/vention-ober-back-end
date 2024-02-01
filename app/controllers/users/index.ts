import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getAllUsers } from "./getAllUsers";
import { updateUserById } from "./updateUserById";
import { deleteUserById } from "./deleteUserById";
import { getUserById } from "./getUserById";

export default {
  getAllUsers: errorHandlerMiddleware(getAllUsers),
  updateUserById: errorHandlerMiddleware(updateUserById),
  deleteUserById: errorHandlerMiddleware(deleteUserById),
  getUserById: errorHandlerMiddleware(getUserById),
};
