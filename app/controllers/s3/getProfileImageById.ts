import { ControllerFunction } from "../../interfaces/ControllerFunction";
import { S3ServiceHandlers } from "../../services/S3Services";
//@ts-ignore
export const getProfileImageById: ControllerFunction = async (
  req,
  res,
  next
) => {
  const userId = req.headers["x-user-id"];
  if (!userId)
    return res.status(400).json({ message: "Bad request, no userId" });
  //@ts-ignore
  const data = await S3ServiceHandlers.getUserPresignedUrlById(userId);
  if (!data) return res.status(500).json({ message: "Server error" });
  return res.status(200).json({ data });
};
