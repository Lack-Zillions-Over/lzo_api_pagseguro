const validate = (payment_method_card_holder_token_data_cryptogram: string): string => {
  if (!payment_method_card_holder_token_data_cryptogram.length ||  payment_method_card_holder_token_data_cryptogram.length < 10 || payment_method_card_holder_token_data_cryptogram.length > 150) {
    throw new Error('Invalid payment method card holder token data cryptogram! This length need to be between 10 and 150');
  }

  return payment_method_card_holder_token_data_cryptogram;
};

export default validate;