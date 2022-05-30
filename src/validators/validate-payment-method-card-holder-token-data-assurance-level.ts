const validate = (payment_method_card_holder_assurance_level: string): number => {
  if (!payment_method_card_holder_assurance_level.length || payment_method_card_holder_assurance_level.length != 2) {
    throw new Error('Invalid payment method card holder assurance level! This length need to be equal 2');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_card_holder_assurance_level)) {
    throw new Error('Invalid payment method card holder assurance level! This need to be only numbers');
  }

  return parseInt(payment_method_card_holder_assurance_level);
};

// eslint-disable-next-line
export default validate;