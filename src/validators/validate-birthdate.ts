const validate = (birthDate: string): string => {
// eslint-disable-next-line
  if (!/[0-3][0-9]\/[0-1][0-9]\/[0-9]{4}/.test(birthDate)) {
    throw new Error('Invalid birthDate! This need to be in format dd/MM/yyyy');
  }

  return birthDate;
};

// eslint-disable-next-line
export default validate;