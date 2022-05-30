const validate = (summary_total: string): number => {
  if (!summary_total.length || summary_total.length > 9) {
    throw new Error('Invalid summary total! This length need to be lesser or equal 9');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(summary_total)) {
    throw new Error('Invalid summary total! This need to be only numbers');
  }

  return parseInt(summary_total);
};

// eslint-disable-next-line
export default validate;