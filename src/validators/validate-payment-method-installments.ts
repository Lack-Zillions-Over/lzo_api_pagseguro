const validate = (payment_method_installments: string): number => {
  if (!payment_method_installments.length || payment_method_installments.length != 2) {
    throw new Error('Invalid payment method installments! This length need to be equal 2');
  }

  // eslint-disable-next-line
  if (!/[0-9]{2}/.test(payment_method_installments)) {
    throw new Error('Invalid payment method installments! This need to be only numbers');
  }

  return parseInt(payment_method_installments);
};

// eslint-disable-next-line
export default validate;