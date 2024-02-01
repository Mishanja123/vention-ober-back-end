import User from "../../models/user";

export const deleteUserById = async (id: number) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
  }
};
