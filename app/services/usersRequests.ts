import createHttpError from "../helpers/createHttpError";
import User from "../models/user";
import UserCredentials from "../models/user_credentials";

const users = {
  getAll: async () => await User.findAll(),

  findById: async (id: number) => await User.findByPk(id),

  deleteById: async (id: number) => {
    const user = await User.findByPk(id);
    user?.destroy();
  },

  getCredentialsById: async (id: number) => UserCredentials.findByPk(id),
};

export default users;
