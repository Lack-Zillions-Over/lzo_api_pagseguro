const validate = (created_at: string): string => {
  if (
    created_at.toString().replace(/[\D]/g, '').length <= 0 ||
    created_at.toString().replace(/[0-9]/g, '') !== '--T::.Z'
  )
    throw new Error('Invalid created_at! This need to be in format yyyy-MM-ddTHH:mm:ss.SSSZ');

  return created_at;
};

export default validate;