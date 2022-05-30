import { TypePaymentRecurringType } from '../types/index';

const validate = (payment_method_boleto_recurring_type: string): string => {
  const validStatus: TypePaymentRecurringType[] = ['INITIAL', 'SUBSEQUENT'];

  if (validStatus.filter(item => item === payment_method_boleto_recurring_type).length === 0) {
    throw new Error('Invalid payment method recurring type! This value need to be one of the following: INITIAL, SUBSEQUENT');
  }

  return payment_method_boleto_recurring_type;
}

export default validate;