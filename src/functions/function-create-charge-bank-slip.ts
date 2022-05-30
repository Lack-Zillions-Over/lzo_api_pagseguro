import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { FunctionCreateErrorLog } from '../functions/index';

import { IChargeRequestBankSlip, IChargeResponseBankSlip } from '../interfaces/index';
import { TypeErrorMessages, TypeHeaders } from '../types/index';

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
    const
      { response: { data: { error_messages } } } = error,
      errors = error_messages as TypeErrorMessages[];

    return await FunctionCreateErrorLog(errors);
  }
};

export default handle;