import { ControllerFunction } from "../../interfaces/ControllerFunction";

export const getCurrentUser: ControllerFunction = async (req, res, next) => {
  const { first_name, email } = req.user!;

  res.status(200).json({
    first_name,
    email,
  });
};
