const validate = (payment_method_card_security_code: string): number => {
  if (
    !/[0-9]{3}/.test(payment_method_card_security_code) && /[0-9]/.test(payment_method_card_security_code) && parseInt(payment_method_card_security_code) <= 100 || // eslint-disable-line
    !/[0-9]{3}/.test(payment_method_card_security_code) && /[0-9]/.test(payment_method_card_security_code) && parseInt(payment_method_card_security_code) > 999 || // eslint-disable-line
    /[0-9]{4}/.test(payment_method_card_security_code) && parseInt(payment_method_card_security_code) < 1000 || // eslint-disable-line
    /[0-9]{4}/.test(payment_method_card_security_code) && parseInt(payment_method_card_security_code) > 9999 // eslint-disable-line
  ) {
    throw new Error('Invalid payment method card exp year! This need to be only numbers and between 100 and 999 or between 1000 and 9999');
  }

  return parseInt(payment_method_card_security_code);
};

// eslint-disable-next-line
export default validate;