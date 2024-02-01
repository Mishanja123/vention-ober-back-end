import CreditCard, { ICreditCard } from "../../models/creditCard";

export const createCreditCard = async (creditCardInfo: ICreditCard) => {
  const newCreditCard = await CreditCard.create({ ...creditCardInfo });

  const plainResult = newCreditCard.get({ plain: true });

  return plainResult.id!;
};
