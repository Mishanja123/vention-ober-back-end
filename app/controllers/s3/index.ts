import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { uploadImage } from "./uploadImage";
import { getProfileImageById } from "./getProfileImageById";
import { getDishImageByName } from "./getDishImageByName";
export default {
  uploadImage: errorHandlerMiddleware(uploadImage),
  getProfileImageById: errorHandlerMiddleware(getProfileImageById),
  getDishImageByName: errorHandlerMiddleware(getDishImageByName),
};
