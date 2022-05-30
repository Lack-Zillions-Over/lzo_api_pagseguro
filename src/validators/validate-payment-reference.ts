const validate = (payment_reference: string): string => {
  if (!payment_reference.length || payment_reference.length > 4 || payment_reference.length > 20) {
    throw new Error('Invalid payment reference! This length need to be lesser or equal 4 and lesser or equal 20');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_reference)) {
    throw new Error('Invalid payment reference! This need to be only numbers');
  }

  return payment_reference;
};

// eslint-disable-next-line
export default validate;