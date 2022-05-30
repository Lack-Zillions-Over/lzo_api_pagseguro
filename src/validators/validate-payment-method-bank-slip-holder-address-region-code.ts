const validate = (payment_method_boleto_holder_address_region_code: string): string => {
  if (!payment_method_boleto_holder_address_region_code.length || payment_method_boleto_holder_address_region_code.length != 2) {
    throw new Error('Invalid payment method boleto holder address region! This length need to be 2');
  }

  return payment_method_boleto_holder_address_region_code;
}

export default validate;