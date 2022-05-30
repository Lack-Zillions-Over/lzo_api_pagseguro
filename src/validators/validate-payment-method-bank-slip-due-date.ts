const validate = (payment_method_boleto_due_date: `${number}-${number}-${number}`): `${number}-${number}-${number}` => {
  // eslint-disable-next-line
  if (!/[0-9]{4}\-[0-1][0-9]\-[0-3][0-9]/.test(payment_method_boleto_due_date)) {
    throw new Error('Invalid payment method boleto due date! This need to be in format yyyy-MM-dd');
  }

  return payment_method_boleto_due_date;
};

// eslint-disable-next-line
export default validate;