const validate = (payment_method_boleto_holder_name: string): string => {
  if (!payment_method_boleto_holder_name.length || payment_method_boleto_holder_name.length < 1 || payment_method_boleto_holder_name.length > 30) {
    throw new Error('Invalid payment method boleto holder name! This length need to be bigger or equal 1 and lesser or equal 30');
  }

  return payment_method_boleto_holder_name;
}

export default validate;