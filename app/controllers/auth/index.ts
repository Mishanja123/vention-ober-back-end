import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { signUp } from "./signUp";
import { signIn } from "./signIn";
import { logOut } from "./logOut";
import { getRefreshTokens } from "./getRefreshTokens";

export default {
  signUp: errorHandlerMiddleware(signUp),
  signIn: errorHandlerMiddleware(signIn),
  logOut: errorHandlerMiddleware(logOut),
  getRefreshTokens: errorHandlerMiddleware(getRefreshTokens),
};
