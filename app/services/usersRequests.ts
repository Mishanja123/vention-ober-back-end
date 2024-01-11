import User from "../models/user";

const Users = {
  getAll: async () => await User.findAll(),

  findById: async (id: number) => await User.findByPk(id),
};

export default Users;
