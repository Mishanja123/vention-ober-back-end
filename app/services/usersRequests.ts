import User from "../models/user";

const users = {
  getAll: async () => await User.findAll(),

  findById: async (id: number) => await User.findByPk(id),

  deleteById: async (id: number) => {
    const user = await User.findByPk(id);
    console.log(user);
    user?.destroy();
  },
};

export default users;
