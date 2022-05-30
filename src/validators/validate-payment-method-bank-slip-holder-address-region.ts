const validate = (payment_method_boleto_holder_address_region: string): string => {
  if (!payment_method_boleto_holder_address_region.length || payment_method_boleto_holder_address_region.length < 1 || payment_method_boleto_holder_address_region.length > 50) {
    throw new Error('Invalid payment method boleto holder address region! This length need to be bigger or equal 1 and lesser or equal 50');
  }

  return payment_method_boleto_holder_address_region;
}

export default validate;