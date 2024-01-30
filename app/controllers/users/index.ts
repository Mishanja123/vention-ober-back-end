import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getAllUsers } from "./getAllUsers";
import { updateUser } from "./updateUser";
import { deleteUserById } from "./deleteUserById";
import { getSelfProfile } from "./getSelfProfile";

export default {
  getAllUsers: errorHandlerMiddleware(getAllUsers),
  updateUser: errorHandlerMiddleware(updateUser),
  deleteUserById: errorHandlerMiddleware(deleteUserById),
  getUserById: errorHandlerMiddleware(getSelfProfile),
};
