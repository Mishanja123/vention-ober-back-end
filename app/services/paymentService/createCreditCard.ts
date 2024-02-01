import CreditCard, { ICreditCard } from "../../models/creditCard";

export const createCreditCard = async (creditCardInfo: ICreditCard, userId: number) => {
  const newCreditCard = await CreditCard.create({ ...creditCardInfo, userId });

  const plainResult = newCreditCard.get({ plain: true });

  return plainResult.id!;
};
