const validate = (payment_method_card_exp_year: string): number => {
  if (
    !/[0-9]{4}/.test(payment_method_card_exp_year) || // eslint-disable-line
    /[0-9]{4}/.test(payment_method_card_exp_year) && parseInt(payment_method_card_exp_year) < 1000 || // eslint-disable-line
    /[0-9]{4}/.test(payment_method_card_exp_year) && parseInt(payment_method_card_exp_year) > 9999 // eslint-disable-line
  ) {
    throw new Error('Invalid payment method card exp year! This need to be only numbers and between 10 and 99 or between 1000 and 9999');
  }

  return parseInt(payment_method_card_exp_year);
};

// eslint-disable-next-line
export default validate;