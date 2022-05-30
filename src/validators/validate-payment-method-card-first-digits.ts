const validate = (payment_method_card_first_digits: string): number => {
  if (!payment_method_card_first_digits.length || payment_method_card_first_digits.length != 6) {
    throw new Error('Invalid payment method card first digits! This length need to be equal 6');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_card_first_digits)) {
    throw new Error('Invalid payment method card first digits! This need to be only numbers');
  }

  return parseInt(payment_method_card_first_digits);
};

// eslint-disable-next-line
export default validate;