import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getAllUsers } from "./getAllUsers";

export default {
  getAllUsers: errorHandlerMiddleware(getAllUsers),
};
