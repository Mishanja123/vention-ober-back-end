import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { signUp } from "./postSignUp";
import { signIn } from "./postSignIn";
import { logOut } from "./postLogOut";
import { getRefreshTokens } from "./getRefreshTokens";
import { getCurrentUser } from "./getCurrentUser";

export default {
  postSingUp: errorHandlerMiddleware(signUp),
  postSingIn: errorHandlerMiddleware(signIn),
  postLogOut: errorHandlerMiddleware(logOut),
  getRefreshTokens: errorHandlerMiddleware(getRefreshTokens),
  getCurrentUser: errorHandlerMiddleware(getCurrentUser),
};
