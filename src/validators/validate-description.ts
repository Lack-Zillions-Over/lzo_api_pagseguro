const validate = (description: string): string => {
  if (!description.length || description.length < 1 || description.length > 64) {
    throw new Error('Invalid description! This length need to be bigger or equal 1 and lesser or equal 64');
  }

  return description;
}

export default validate;