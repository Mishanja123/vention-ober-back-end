import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { signUp } from "./signUp";
import { signIn } from "./signIn";
import { logOut } from "./logOut";
import { getRefreshTokens } from "./getRefreshTokens";
import { getCurrentUser } from "./getCurrentUser";

export default {
  signUp: errorHandlerMiddleware(signUp),
  signIn: errorHandlerMiddleware(signIn),
  logOut: errorHandlerMiddleware(logOut),
  getRefreshTokens: errorHandlerMiddleware(getRefreshTokens),
  getCurrentUser: errorHandlerMiddleware(getCurrentUser),
};
