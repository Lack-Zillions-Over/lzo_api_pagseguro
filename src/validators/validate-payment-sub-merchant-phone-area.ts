const validate = (payment_method_boleto_sub_merchant_phone_area: string): number => {
  if (!payment_method_boleto_sub_merchant_phone_area.length || payment_method_boleto_sub_merchant_phone_area.length > 2) {
    throw new Error('Invalid payment method boleto sub merchant phone area! This length need to be equal 2');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_boleto_sub_merchant_phone_area)) {
    throw new Error('Invalid payment method boleto sub merchant phone area! This need to be only numbers');
  }

  return parseInt(payment_method_boleto_sub_merchant_phone_area);
};

// eslint-disable-next-line
export default validate;