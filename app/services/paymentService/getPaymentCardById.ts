import CreditCard from "../../models/creditCard";

export const getPaymentCardById = async (id: string) => {
  const card = await CreditCard.findByPk(id);
  return card;
};
