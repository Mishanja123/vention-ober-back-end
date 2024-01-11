import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { postSingUp } from "./postSingUp";
import { postSingIn } from "./postSingIn";
import { postLogOut } from "./postLogOut";
import { getRefreshTokens } from "./getRefreshTokens";
import { getCurrentUser } from "./getCurrentUser";

export default {
  postSingUp: errorHandlerMiddleware(postSingUp),
  postSingIn: errorHandlerMiddleware(postSingIn),
  postLogOut: errorHandlerMiddleware(postLogOut),
  getRefreshTokens: errorHandlerMiddleware(getRefreshTokens),
  getCurrentUser: errorHandlerMiddleware(getCurrentUser)
};
