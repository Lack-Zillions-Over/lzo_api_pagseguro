const validate = (payment_method_boleto_sub_merchant_phone_country: string): number => {
  if (!payment_method_boleto_sub_merchant_phone_country.length || payment_method_boleto_sub_merchant_phone_country.length > 3) {
    throw new Error('Invalid payment method boleto sub merchant phone country! This length need to be less or equal 3');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_boleto_sub_merchant_phone_country)) {
    throw new Error('Invalid payment method boleto sub merchant phone country! This need to be only numbers');
  }

  return parseInt(payment_method_boleto_sub_merchant_phone_country);
};

// eslint-disable-next-line
export default validate;