const validate = (payment_method_boleto_sub_merchant_phone_number: string): number => {
  if (!payment_method_boleto_sub_merchant_phone_number.length || payment_method_boleto_sub_merchant_phone_number.length < 8 || payment_method_boleto_sub_merchant_phone_number.length > 9) {
    throw new Error('Invalid payment method boleto sub merchant phone number! This length need to be greater or equal 8 and lesser or equal 9');
  }

  if (
    !/[0-9]{8}/.test(payment_method_boleto_sub_merchant_phone_number) && // eslint-disable-line
    !/[0-9]{1}[0-9]{8}/.test(payment_method_boleto_sub_merchant_phone_number) // eslint-disable-line
  ) {
    throw new Error('Invalid payment method boleto sub merchant phone number! This need to be format: 99999999 or 999999999');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_boleto_sub_merchant_phone_number)) {
    throw new Error('Invalid payment method boleto sub merchant phone number! This need to be only numbers');
  }

  return parseInt(payment_method_boleto_sub_merchant_phone_number);
};

// eslint-disable-next-line
export default validate;