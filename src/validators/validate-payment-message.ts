const validate = (payment_message: string): string => {
  if (!payment_message.length || payment_message.length > 5 || payment_message.length > 100) {
    throw new Error('Invalid payment message! This length need to be lesser or equal 5 and lesser or equal 100');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_message)) {
    throw new Error('Invalid payment message! This need to be only numbers');
  }

  return payment_message;
};

// eslint-disable-next-line
export default validate;