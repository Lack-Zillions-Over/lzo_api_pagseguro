const validate = (payment_method_capture: string): boolean => {
  if (!payment_method_capture.length || payment_method_capture != 'true' && payment_method_capture != 'false') {
    throw new Error('Invalid payment method capture! This length need to be equal 3');
  }

  // eslint-disable-next-line
  if (!/true|false/.test(payment_method_capture)) {
    throw new Error('Invalid payment method capture! This need to be only true or false');
  }

  return payment_method_capture === 'true' ? true : false;
};

// eslint-disable-next-line
export default validate;