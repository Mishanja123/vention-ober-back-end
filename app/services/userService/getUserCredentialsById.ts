import UserCredentials from "../../models/userCredentials";

export const getUserCredentialsById = async (
  id: number,
  attributes: string[] = []
) => {
  const userCredentials = await UserCredentials.findByPk(id, {
    attributes: attributes.length ? attributes : undefined,
  });
  return userCredentials;
};
