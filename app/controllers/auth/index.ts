import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { singUp } from "./postSingUp";
import { signIn } from "./postSingIn";
import { logOut } from "./postLogOut";
import { getRefreshTokens } from "./getRefreshTokens";
import { getCurrentUser } from "./getCurrentUser";

export default {
  postSingUp: errorHandlerMiddleware(singUp),
  postSingIn: errorHandlerMiddleware(signIn),
  postLogOut: errorHandlerMiddleware(logOut),
  getRefreshTokens: errorHandlerMiddleware(getRefreshTokens),
  getCurrentUser: errorHandlerMiddleware(getCurrentUser)
};
