const validate = (amount_value: string): number => {
  if (!amount_value.length ||amount_value.length > 9) {
    throw new Error('Invalid amount value! This length need to be lesser or equal 9');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(amount_value)) {
    throw new Error('Invalid amount value! This need to be only numbers');
  }

  if (parseInt(amount_value) < 500) {
    throw new Error('Invalid amount value! This need to be greater or equal $5,00');
  }

  return parseInt(amount_value);
};

// eslint-disable-next-line
export default validate;