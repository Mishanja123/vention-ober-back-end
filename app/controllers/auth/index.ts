import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { postSignUp } from "./postSignUp";
import { postSignIn } from "./postSignIn";
import { postLogOut } from "./postLogOut";
import { getRefreshTokens } from "./getRefreshTokens";
import { getCurrentUser } from "./getCurrentUser";

export default {
  postSignUp: errorHandlerMiddleware(postSignUp),
  postSignIn: errorHandlerMiddleware(postSignIn),
  postLogOut: errorHandlerMiddleware(postLogOut),
  getRefreshTokens: errorHandlerMiddleware(getRefreshTokens),
  getCurrentUser: errorHandlerMiddleware(getCurrentUser),
};
