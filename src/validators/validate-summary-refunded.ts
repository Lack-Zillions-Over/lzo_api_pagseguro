const validate = (summary_refunded: string): number => {
  if (!summary_refunded.length || summary_refunded.length > 9) {
    throw new Error('Invalid summary refunded! This length need to be lesser or equal 9');
  }

  // eslint-disable-next-line
  if (/\W|[a-zA-Z]/.test(summary_refunded)) {
    throw new Error('Invalid summary refunded! This need to be only numbers');
  }

  return parseInt(summary_refunded);
};

// eslint-disable-next-line
export default validate;