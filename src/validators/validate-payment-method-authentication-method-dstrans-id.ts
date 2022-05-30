const validate = (payment_method_authentication_method_dstrans_id: string): string => {
  if (!payment_method_authentication_method_dstrans_id.length || payment_method_authentication_method_dstrans_id.length != 80) {
    throw new Error('Invalid payment method authentication method dstrans id! This length need to be equal 80');
  }

  return payment_method_authentication_method_dstrans_id;
}

export default validate;