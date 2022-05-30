const validate = (payment_method_boleto_instruction_line_2: string): string => {
  if (!payment_method_boleto_instruction_line_2.length || payment_method_boleto_instruction_line_2.length < 1 || payment_method_boleto_instruction_line_2.length > 75) {
    throw new Error('Invalid payment method boleto instruction line 2! This length need to be bigger or equal 1 and lesser or equal 75');
  }

  return payment_method_boleto_instruction_line_2;
}

export default validate;