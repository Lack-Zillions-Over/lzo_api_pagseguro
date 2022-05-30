const validate = (payment_method_card_brand: string): string => {
  if (!payment_method_card_brand.length || payment_method_card_brand.length < 3 || payment_method_card_brand.length > 20) {
    throw new Error('Invalid payment method card brand! This length need to be greater or equal 3 and less or equal 20');
  }

  return payment_method_card_brand;
};

export default validate;