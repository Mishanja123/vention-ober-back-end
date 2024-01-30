import { ControllerFunction } from "../../types/ControllerFunction";
import Users from "../../services/usersRequests";
import bcrypt from "bcryptjs";

export const getSelfProfile: ControllerFunction = async (req, res, next) => {
  const { id } = req.user!;
  const user = await Users.findById(id);
  const userCredentials = await Users.getCredentialsById(id);
  res.status(200).json({ user, userCredentials });
};
