import User from "../models/user";

const Users = {
  getAll: async () => await User.findAll(),
};

export default Users;
