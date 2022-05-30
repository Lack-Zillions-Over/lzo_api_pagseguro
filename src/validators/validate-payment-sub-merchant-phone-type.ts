import { TypePaymentSubMerchantPhoneType } from '../types/index';

const validate = (payment_method_boleto_sub_merchant_phone_type: TypePaymentSubMerchantPhoneType): TypePaymentSubMerchantPhoneType => {
  const validStatus: TypePaymentSubMerchantPhoneType[] = ['CELLPHONE', 'BUSINESS'];

  if (validStatus.filter(item => item === payment_method_boleto_sub_merchant_phone_type).length === 0) {
    throw new Error('Invalid payment method boleto sub merchant phone type! This value need to be one of the following: CELLPHONE, BUSINESS');
  }

  return payment_method_boleto_sub_merchant_phone_type;
}

export default validate;