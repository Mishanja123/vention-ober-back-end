import User from "../../models/user";

export const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};
