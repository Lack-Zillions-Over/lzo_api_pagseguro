const validate = (email: string): string => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.length || email.length > 60) {
    throw new Error('Invalid email! Max length is 60');
  }

  if (!regex.test(email)) {
    throw new Error('Invalid email! This need to be a valid email');
  }

  return email;
};

export default validate;