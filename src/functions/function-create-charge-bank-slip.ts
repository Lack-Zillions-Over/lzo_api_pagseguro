import axios, { AxiosError, AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { FunctionCreateErrorLog } from '../functions/index';

import { IChargeRequestBankSlip, IChargeResponseBankSlip } from '../interfaces/index';
import { TypeChargeResponseError, TypeHeaders } from '../types/index';

import { UtilGetApiHost } from '../utils/index';

/**
 * @description Send a charge by bank slip
 */
const handle = async (charge: IChargeRequestBankSlip, token: string) => {
  const
    host = await UtilGetApiHost(),
    headers: TypeHeaders = {
      'Authorization': token,
      'Content-Type': "application/json",
      'x-idempotency-key': uuidv4(),
    }

  try {
    const { data } = await axios.post<IChargeRequestBankSlip, AxiosResponse<IChargeResponseBankSlip>>(`${host}/charges`, charge, { headers });

    return data;
  } catch (error) {
    let
      { message: axiosMessage, response: { status, data } } = error as AxiosError,
      { error_messages, message } = data as TypeChargeResponseError;

    error_messages = error_messages || [{
      code: status.toString(),
      description: axiosMessage,
      message,
      parameter_name: '',
    }];

    return await FunctionCreateErrorLog(error_messages);
  }
};

export default handle;