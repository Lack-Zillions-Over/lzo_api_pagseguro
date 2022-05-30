const validate = (payment_method_boleto_sub_merchant_reference_id: string): string => {
  if (!payment_method_boleto_sub_merchant_reference_id.length || payment_method_boleto_sub_merchant_reference_id.length != 15) {
    throw new Error('Invalid payment method boleto sub merchant reference id! This length need to be equal 15');
  }

  return payment_method_boleto_sub_merchant_reference_id;
}

export default validate;