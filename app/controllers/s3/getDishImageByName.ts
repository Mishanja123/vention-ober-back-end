import { ControllerFunction } from "../../types/ControllerFunction";
import { S3ServiceHandlers } from "../../services/S3Services";
//@ts-ignore
export const getDishImageByName: ControllerFunction = async (
  req,
  res,
  next
) => {
  const name = req.body.name;
  //@ts-ignore
  const data = await S3ServiceHandlers.getDishesPresignedUrl(name);
  if (!data)
    return res.status(500).json({ message: "Server error, failed to fetch" });
  //@ts-ignore
  console.log(data);
  return res.status(200).json({ data });
};
