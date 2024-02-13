import User from "../../models/user";

export const getUserById = async (id: number, attributes: string[] = []) => {
  const user = await User.findByPk(id, {
    attributes: attributes.length ? attributes : undefined,
  });

  return user;
};
