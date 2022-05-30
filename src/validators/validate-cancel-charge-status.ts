import { TypeStatus } from "../types/index";

const validate = (status: TypeStatus): string => {
  if (status !== 'PAID' && status !== 'AUTHORIZED') {
    throw new Error('This charge is not paid or authorized.');
  }

  return status;
};

export default validate;