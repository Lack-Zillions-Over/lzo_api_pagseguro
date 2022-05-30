const validate = (payment_method_boleto_holder_email: string): string => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!payment_method_boleto_holder_email.length || payment_method_boleto_holder_email.length > 255) {
    throw new Error('Invalid payment method boleto holder email! Max length is 255');
  }

  if (!regex.test(payment_method_boleto_holder_email)) {
    throw new Error('Invalid payment method boleto holder email! This need to be a valid email');
  }

  return payment_method_boleto_holder_email;
};

export default validate;