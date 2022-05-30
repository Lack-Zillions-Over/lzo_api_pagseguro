import { TypePaymentMethodAuthenticationMethodStatus } from '../types/index';

const validate = (payment_method_authentication_method_status: string): string => {
  const validStatus: TypePaymentMethodAuthenticationMethodStatus[] = ['AUTHENTICATED', 'NOT AUTHENTICATED'];

  if (validStatus.filter(item => item === payment_method_authentication_method_status).length === 0) {
    throw new Error('Invalid status! This value need to be one of the following: AUTHENTICATED, NOT AUTHENTICATED');
  }

  return payment_method_authentication_method_status;
}

export default validate;