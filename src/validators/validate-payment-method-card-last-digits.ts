const validate = (payment_method_card_last_digits: string): number => {
  if (!payment_method_card_last_digits.length || payment_method_card_last_digits.length != 4) {
    throw new Error('Invalid payment method card last digits! This length need to be equal 4');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_card_last_digits)) {
    throw new Error('Invalid payment method card last digits! This need to be only numbers');
  }

  return parseInt(payment_method_card_last_digits);
};

// eslint-disable-next-line
export default validate;