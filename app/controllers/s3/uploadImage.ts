import { ControllerFunction } from "../../types/ControllerFunction";
import { S3ServiceHandlers } from "../../services/S3Services";
//@ts-ignore
export const uploadImage: ControllerFunction = async (req, res, next) => {
  const userId = req.headers["x-user-id"];
  const { file } = req;
  console.log(file, userId);
  if (!file) return res.status(400).json({ message: "Bad request" });
  //@ts-ignore
  const { error, key } = S3ServiceHandlers.uploadToS3({ file, userId });
  if (error) return res.status(500).json({ message: error.message });
  return res.status(200).json({ key });
};
