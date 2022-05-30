const validate = (areaCode: string): string => {
  if (!areaCode.length || areaCode.length > 2) {
    throw new Error('Invalid areaCode! This length need to be lesser or equal 2');
  }

  // eslint-disable-next-line
  if (!/[0-9]{2}/.test(areaCode)) {
    throw new Error('Invalid areaCode! This need to be only numbers');
  }

  return areaCode;
};

// eslint-disable-next-line
export default validate;