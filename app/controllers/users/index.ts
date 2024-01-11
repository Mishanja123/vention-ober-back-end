import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getAllUsers } from "./getAllUsers";
import { updateUser } from "./updateUser";

export default {
  getAllUsers: errorHandlerMiddleware(getAllUsers),
  updateUser: errorHandlerMiddleware(updateUser),
};
