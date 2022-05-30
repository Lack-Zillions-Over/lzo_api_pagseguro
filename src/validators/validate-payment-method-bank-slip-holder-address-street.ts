const validate = (payment_method_boleto_holder_address_street: string): string => {
  if (!payment_method_boleto_holder_address_street.length || payment_method_boleto_holder_address_street.length < 1 || payment_method_boleto_holder_address_street.length > 160) {
    throw new Error('Invalid payment method boleto holder address street! This length need to be bigger or equal 1 and lesser or equal 160');
  }

  return payment_method_boleto_holder_address_street;
}

export default validate;