const validate = (payment_method_network_token: string): string => {
  if (!payment_method_network_token.length || payment_method_network_token.length < 14 || payment_method_network_token.length > 19) {
    throw new Error('Invalid payment method network token! This length need to be greater or equal 14 and lesser or equal 19');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_network_token)) {
    throw new Error('Invalid payment method network token! This need to be only numbers');
  }

  return payment_method_network_token;
};

// eslint-disable-next-line
export default validate;