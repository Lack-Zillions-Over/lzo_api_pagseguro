import { differenceInDays } from 'date-fns';

const validate = (created_at: string): string => {
  if (differenceInDays(new Date(created_at), new Date()) > 90) {
    throw new Error('This charge is not allowed to be refunded. The maximum refund period is 90 days for credit card.');
  }

  return created_at;
};

export default validate;