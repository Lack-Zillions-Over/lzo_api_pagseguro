const validate = (payment_soft_description: string): string => {
  if (!payment_soft_description.length || payment_soft_description.length < 1 || payment_soft_description.length > 17) {
    throw new Error('Invalid payment method card soft description! This length need to be bigger or equal 1 and lesser or equal 17');
  }

  return payment_soft_description;
}

export default validate;