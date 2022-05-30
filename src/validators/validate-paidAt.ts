const validate = (paid_at: string): string => {
  if (
    paid_at.toString().replace(/[\D]/g, '').length <= 0 ||
    paid_at.toString().replace(/[0-9]/g, '') !== '--T::.Z'
  )
    throw new Error('Invalid paid_at! This need to be in format yyyy-MM-ddTHH:mm:ss.SSSZ');

  return paid_at;
};

export default validate;