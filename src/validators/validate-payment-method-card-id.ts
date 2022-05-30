const validate = (payment_method_card_id: string): string => {
  if (!payment_method_card_id.length || payment_method_card_id.length != 41) {
    throw new Error('Invalid payment method card id! This length need to be equal 41');
  }

  return payment_method_card_id;
};

export default validate;