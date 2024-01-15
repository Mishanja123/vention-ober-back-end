import CreditCard from "../models/credit_card";

const Payment = {
  postCreditCard: async (
    addressTitle: string,
    cardNumber: string,
    cardholder: string,
    cvvNumber: number,
    month: number,
    year: number,
    userId: number
  ) => {
    const res = await CreditCard.create({
      title: addressTitle,
      card_number: cardNumber,
      name_on_card:cardholder,
      card_code: cvvNumber,
      expire_month: month,
      expire_year: year
    });
    // @ts-ignore
    res.createUser({
      user_id: userId
    });
  }
};

export default Payment;
