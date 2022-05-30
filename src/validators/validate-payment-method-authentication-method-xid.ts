const validate = (payment_method_authentication_method_xid: string): string => {
  if (!payment_method_authentication_method_xid.length || payment_method_authentication_method_xid.length != 80) {
    throw new Error('Invalid payment method authentication method xid! This length need to be equal 80');
  }

  return payment_method_authentication_method_xid;
}

export default validate;