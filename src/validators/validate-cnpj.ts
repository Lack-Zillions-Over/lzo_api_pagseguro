const validate = (value: string): string => {
// eslint-disable-next-line
  if (!/[0-9]{14}/.test(value)) {
    throw new Error('Invalid document! CNPJ is invalid.');
  }

  return value;
};

// eslint-disable-next-line
export default validate;