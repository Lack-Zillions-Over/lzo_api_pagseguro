const validate = (payment_method_authentication_method_cavv: string): string => {
  if (!payment_method_authentication_method_cavv.length || payment_method_authentication_method_cavv.length != 80) {
    throw new Error('Invalid payment method authentication method cavv! This length need to be equal 80');
  }

  return payment_method_authentication_method_cavv;
}

export default validate;