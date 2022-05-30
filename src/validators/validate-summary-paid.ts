const validate = (summary_paid: string): number => {
  if (!summary_paid.length || summary_paid.length > 9) {
    throw new Error('Invalid summary paid! This length need to be lesser or equal 9');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(summary_paid)) {
    throw new Error('Invalid summary paid! This need to be only numbers');
  }

  return parseInt(summary_paid);
};

// eslint-disable-next-line
export default validate;