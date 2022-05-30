const validate = (payment_method_boleto_holder_address_number: string): string => {
  if (!payment_method_boleto_holder_address_number.length || payment_method_boleto_holder_address_number.length < 1 || payment_method_boleto_holder_address_number.length > 20) {
    throw new Error('Invalid payment method boleto holder address number! This length need to be bigger or equal 1 and lesser or equal 20');
  }

  return payment_method_boleto_holder_address_number;
}

export default validate;