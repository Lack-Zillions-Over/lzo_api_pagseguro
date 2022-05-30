const validate = (id: string): string => {
  if (!id.length || id.length != 41) {
    throw new Error('Invalid id! This length need to be equal 41');
  }

  return id;
};

export default validate;