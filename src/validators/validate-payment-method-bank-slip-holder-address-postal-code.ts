const validate = (payment_method_boleto_holder_address_postal_code: string): string => {
  // eslint-disable-next-line
  if (!/[0-9]{8}/.test(payment_method_boleto_holder_address_postal_code)) {
    throw new Error('Invalid payment method boleto holder address postal code! Postal code is invalid.');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_boleto_holder_address_postal_code)) {
    throw new Error('Invalid payment method boleto holder address postal code! This need to be only numbers');
  }

  return payment_method_boleto_holder_address_postal_code;
};

// eslint-disable-next-line
export default validate;