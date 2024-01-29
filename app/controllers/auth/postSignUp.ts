import Authentication from "../../services/authRequests";
import { ControllerFunction } from "../../types/ControllerFunction";

export const postSignUp: ControllerFunction = async (req, res, next) => {
  const result = await Authentication.createUser(req.body);

  res.status(201).json({
    message: result,
  });
};
