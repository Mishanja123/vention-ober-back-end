import User from "../../models/user";

import userMesseges from "../../messages/userMessages";

export const getUserById = async (id: number) => {
  const user = await User.findByPk(id);

  return user;
};
