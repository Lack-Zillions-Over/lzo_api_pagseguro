const validate = (payment_method_boleto_sub_merchant_name: string): string => {
  if (!payment_method_boleto_sub_merchant_name.length || payment_method_boleto_sub_merchant_name.length < 1 || payment_method_boleto_sub_merchant_name.length > 60) {
    throw new Error('Invalid payment method boleto sub merchant name! This length need to be bigger or equal 1 and lesser or equal 64');
  }

  return payment_method_boleto_sub_merchant_name;
}

export default validate;