const validate = (payment_method_authentication_method_eci: string): string => {
  if (!payment_method_authentication_method_eci.length || payment_method_authentication_method_eci.length != 2) {
    throw new Error('Invalid payment method authentication method eci! This length need to be equal 2');
  }

  return payment_method_authentication_method_eci;
}

export default validate;