import { AuthHandlers } from "../../services/authServices";
import { ControllerFunction } from "../../interfaces/ControllerFunction";

export const signUp: ControllerFunction = async (req, res, next) => {
  const result = await AuthHandlers.createUser(req.body);

  res.status(201).json({
    message: result,
  });
};
