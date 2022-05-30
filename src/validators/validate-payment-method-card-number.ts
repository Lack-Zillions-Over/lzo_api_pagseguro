const validate = (payment_method_card_number: string): number => {
  if (!payment_method_card_number.length || payment_method_card_number.length < 14 || payment_method_card_number.length > 19) {
    throw new Error('Invalid payment method card number! This length need to be greater or equal 14 and lesser or equal 19');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_card_number)) {
    throw new Error('Invalid payment method card number! This need to be only numbers');
  }

  return parseInt(payment_method_card_number);
};

// eslint-disable-next-line
export default validate;