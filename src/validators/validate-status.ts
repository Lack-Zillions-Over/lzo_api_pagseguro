import { TypeStatus } from '../types/index';

const validate = (status: string): string => {
  const validStatus: TypeStatus[] = ['AUTHORIZED', 'PAID', 'DECLINED', 'CANCELED'];

  if (!status.length || status.length < 1 || status.length > 64) {
    throw new Error('Invalid status! This length need to be bigger or equal 1 and lesser or equal 64');
  }

  if (validStatus.filter(item => item === status).length === 0) {
    throw new Error('Invalid status! This value need to be one of the following: AUTHORIZED, PAID, DECLINED, CANCELED');
  }

  return status;
}

export default validate;