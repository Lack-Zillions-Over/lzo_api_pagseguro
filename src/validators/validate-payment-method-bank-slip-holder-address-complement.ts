const validate = (payment_method_boleto_holder_address_complement: string): string => {
  if (payment_method_boleto_holder_address_complement.length > 40) {
    throw new Error('Invalid payment method boleto holder address complement! This length need to lesser or equal 40');
  }

  return payment_method_boleto_holder_address_complement;
}

export default validate;