import { ControllerFunction } from "../../interfaces/ControllerFunction";

export const logOut: ControllerFunction = async (req, res, next) => {
  res.clearCookie("refreshToken", { path: "/" });
  res.status(200).json({ message: "Logout successful" });
};
