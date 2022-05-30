import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { FunctionCreateErrorLog } from '../functions/index';

import { IChargeRequestCreditCard, IChargeResponseCreditCard } from '../interfaces/index';
import { TypeErrorMessages, TypeHeaders } from '../types/index';

import { UtilGetApiHost } from '../utils/index';

/**
 * @description Send a credit card charge
 */
const handle = async (charge: IChargeRequestCreditCard, token: string) => {
  const
    host = await UtilGetApiHost(),
    headers: TypeHeaders = {
      'Authorization': token,
      'Content-Type': "application/json",
      'x-idempotency-key': uuidv4(),
    }

  try {
    const { data } = await axios.post<IChargeRequestCreditCard, AxiosResponse<IChargeResponseCreditCard>>(`${host}/charges`, charge, { headers });

    return data;
  } catch (error) {
    const
      { response: { data: { error_messages } } } = error,
      errors = error_messages as TypeErrorMessages[];

    return await FunctionCreateErrorLog(errors);
  }
};

export default handle;