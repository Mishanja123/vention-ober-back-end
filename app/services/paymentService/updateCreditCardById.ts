import CreditCard, { ICreditCard } from "../../models/creditCard";

export const updateCreditCardById = async ({
  month,
  year,
  cvvNumber,
  addressTitle,
  cardNumber,
  cardHolder,
  id
}: Omit<ICreditCard, "userId">) => {
  const [affectedCount] = await CreditCard.update(
    {
      addressTitle,
      cardNumber,
      month,
      year,
      cvvNumber,
      cardHolder
    },
    { where: { id } }
  );

  if (affectedCount > 0) {
    return await CreditCard.findOne({ where: { id } });
  } else {
    return null;
  }
};
