const validate = (payment_method_boleto_holder_address_locality: string): string => {
  if (!payment_method_boleto_holder_address_locality.length || payment_method_boleto_holder_address_locality.length < 1 || payment_method_boleto_holder_address_locality.length > 60) {
    throw new Error('Invalid payment method boleto holder address locality! This length need to be bigger or equal 1 and lesser or equal 60');
  }

  return payment_method_boleto_holder_address_locality;
}

export default validate;