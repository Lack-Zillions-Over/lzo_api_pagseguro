const validate = (payment_method_boleto_sub_merchant_mcc: string): string => {
  if (!payment_method_boleto_sub_merchant_mcc.length || payment_method_boleto_sub_merchant_mcc.length != 4) {
    throw new Error('Invalid payment method boleto sub merchant mcc! This length need to be equal 4');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(payment_method_boleto_sub_merchant_mcc)) {
    throw new Error('Invalid payment method boleto sub merchant mcc! This need to be only numbers');
  }

  return payment_method_boleto_sub_merchant_mcc;
}

// eslint-disable-next-line
export default validate;