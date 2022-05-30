import { TypePaymentMethodAuthenticationMethodType } from '../types/index';

const validate = (payment_method_authentication_method_type: string): string => {
  const validStatus: TypePaymentMethodAuthenticationMethodType[] = ['THREEDS', 'INAPP'];

  if (validStatus.filter(item => item === payment_method_authentication_method_type).length === 0) {
    throw new Error('Invalid payment method authentication method type! This value need to be one of the following: THREEDS, INAPP');
  }

  return payment_method_authentication_method_type;
}

export default validate;