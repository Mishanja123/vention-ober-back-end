import UserCredentials from "../../models/userCredentials";

import userMesseges from "../../messages/userMessages";

export const getUserCredentialsById = async (id: number) => {
  const userCredentials = await UserCredentials.findByPk(id);
  return userCredentials;
};
