import { ControllerFunction } from "../../types/ControllerFunction";

export const getCurrentUser: ControllerFunction = async (req, res, next) => {
  const { first_name, email } = req.user!;
  console.log("🚀 : email", email)
  console.log("🚀 : first_name", first_name)

  res.status(200).json({
    first_name,
    email
  });
};
