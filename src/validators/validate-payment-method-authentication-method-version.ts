const validate = (payment_method_authentication_method_version: string): string => {
  if (!payment_method_authentication_method_version.length || payment_method_authentication_method_version.length != 10) {
    throw new Error('Invalid payment method authentication method version! This length need to be equal 10');
  }

  return payment_method_authentication_method_version;
}

export default validate;