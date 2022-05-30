const validate = (payment_method_boleto_holder_address_country: string): string => {
  if (!payment_method_boleto_holder_address_country.length || payment_method_boleto_holder_address_country.length < 1 || payment_method_boleto_holder_address_country.length > 50) {
    throw new Error('Invalid payment method boleto holder address country! This length need to be bigger or equal 1 and lesser or equal 50');
  }

  return payment_method_boleto_holder_address_country;
}

export default validate;