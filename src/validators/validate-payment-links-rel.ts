import { TypePaymentLinksRel } from '../types/index';

const validate = (payment_links_rel: string): string => {
  const validStatus: TypePaymentLinksRel[] = ['SEL', 'CHARGE.CANCEL'];

  if (validStatus.filter(item => item === payment_links_rel).length === 0) {
    throw new Error('Invalid payment links rel! This value need to be one of the following: SEL, CHARGE.CANCEL');
  }

  return payment_links_rel;
}

export default validate;