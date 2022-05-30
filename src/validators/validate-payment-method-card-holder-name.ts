const validate = (payment_method_card_holder_name: string): string => {
  if (!payment_method_card_holder_name.length || payment_method_card_holder_name.length < 1 || payment_method_card_holder_name.length > 30) {
    throw new Error('Invalid payment method card holder name! This length need to be greater or equal 1 and lesser or equal 30');
  }

  // eslint-disable-next-line
  if (/[0-9]/.test(payment_method_card_holder_name)) {
    throw new Error('Invalid payment method card holder name! This need to be only letters');
  }

  return payment_method_card_holder_name;
};

// eslint-disable-next-line
export default validate;