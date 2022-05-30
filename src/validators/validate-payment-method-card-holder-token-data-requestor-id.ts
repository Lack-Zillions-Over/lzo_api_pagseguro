const validate = (payment_method_card_holder_token_data_requestor_id : string): string => {
  if (!payment_method_card_holder_token_data_requestor_id .length || payment_method_card_holder_token_data_requestor_id .length != 11) {
    throw new Error('Invalid payment method card id! This length need to be equal 11');
  }

  return payment_method_card_holder_token_data_requestor_id ;
};

export default validate;