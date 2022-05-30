const validate = (payment_code: string): number => {
  if (!payment_code.length || payment_code.length > 5) {
    throw new Error('Invalid payment code! This length need to be lesser or equal 5');
  }

// eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_code)) {
    throw new Error('Invalid payment code! This need to be only numbers');
  }

  return parseInt(payment_code);
};

// eslint-disable-next-line
export default validate;