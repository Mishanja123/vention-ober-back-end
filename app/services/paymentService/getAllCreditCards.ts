import CreditCard from "../../models/creditCard";

export const getAllCreditCards = async (userId: string) => {
  return await CreditCard.findAll({ where: { userId } });
};
