const validate = (reference_id: string): string => {
  if (!reference_id.length || reference_id.length < 1 || reference_id.length > 64) {
    throw new Error('Invalid reference_id! This length need to be bigger or equal 1 and lesser or equal 64');
  }

  return reference_id;
}

export default validate;