import { TypePaymentMethodType } from '../types/index';

const validate = (status: TypePaymentMethodType): TypePaymentMethodType => {
  const validStatus: TypePaymentMethodType[] = ['CREDIT_CARD', 'DEBIT_CARD', 'BOLETO'];

  if (validStatus.filter(item => item === status).length === 0) {
    throw new Error('Invalid payment method type! This value need to be one of the following: CREDIT_CARD, DEBIT_CARD, BOLETO');
  }

  return status;
}

export default validate;