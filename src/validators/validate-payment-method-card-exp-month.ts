const validate = (payment_method_card_exp_month: string): number => {
  if (
    !/[0-9]{2}/.test(payment_method_card_exp_month) && /[0-9]/.test(payment_method_card_exp_month) && parseInt(payment_method_card_exp_month) <= 0 || // eslint-disable-line
    !/[0-9]{2}/.test(payment_method_card_exp_month) && /[0-9]/.test(payment_method_card_exp_month) && parseInt(payment_method_card_exp_month) > 9 || // eslint-disable-line
    /[0-9]{2}/.test(payment_method_card_exp_month) && parseInt(payment_method_card_exp_month) < 10 || // eslint-disable-line
    /[0-9]{2}/.test(payment_method_card_exp_month) && parseInt(payment_method_card_exp_month) > 12 // eslint-disable-line
  ) {
    throw new Error('Invalid payment method card exp month! This need to be only numbers and between 1 and 12');
  }

  return parseInt(payment_method_card_exp_month);
};

// eslint-disable-next-line
export default validate;