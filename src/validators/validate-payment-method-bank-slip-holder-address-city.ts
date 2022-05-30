const validate = (payment_method_boleto_holder_address_city: string): string => {
  if (!payment_method_boleto_holder_address_city.length || payment_method_boleto_holder_address_city.length < 1 || payment_method_boleto_holder_address_city.length > 90) {
    throw new Error('Invalid payment method boleto holder address city! This length need to be bigger or equal 1 and lesser or equal 90');
  }

  return payment_method_boleto_holder_address_city;
}

export default validate;