const validate = (value: string): string => {
// eslint-disable-next-line
  if (!/[0-9]{11}/.test(value)) {
    throw new Error('Invalid document! CPF is invalid.');
  }

  return value;
};

// eslint-disable-next-line
export default validate;