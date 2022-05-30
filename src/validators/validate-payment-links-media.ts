import { TypePaymentLinksMedia } from '../types/index';

const validate = (payment_links_media: string): string => {
  const validStatus: TypePaymentLinksMedia[] = ['application/json', 'application/pdf', 'application/image'];

  if (validStatus.filter(item => item === payment_links_media).length === 0) {
    throw new Error('Invalid payment links media! This value need to be one of the following: application/json, application/pdf, application/image');
  }

  return payment_links_media;
}

export default validate;