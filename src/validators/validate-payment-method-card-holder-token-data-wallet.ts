import { TypePaymentMethodCardHolderTokenDataWallet } from '../types/index';

const validate = (status: string): string => {
  const validStatus: TypePaymentMethodCardHolderTokenDataWallet[] = ['APPLE_PAY', 'GOOGLE_PAY', 'SAMSUNG_PAY', 'MERCHANT_TOKENIZATION_PROGRAM'];

  if (validStatus.filter(item => item === status).length === 0) {
    throw new Error('Invalid status! This value need to be one of the following: APPLE_PAY, GOOGLE_PAY, SAMSUNG_PAY, MERCHANT_TOKENIZATION_PROGRAM');
  }

  return status;
}

export default validate;