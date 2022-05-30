import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { FunctionCreateErrorLog } from '../functions/index';

import { IGetChargeResponse } from '../interfaces/index';
import { TypeErrorMessages, TypeHeaders } from '../types/index';

import { UtilGetApiHost } from '../utils/index';

/**
 * @description Query a charge by ID
 */
const handle = async (charge_id: string, token: string) => {
  const
    host = await UtilGetApiHost(),
    headers: TypeHeaders = {
      'Authorization': token,
      'Content-Type': "application/json",
      'x-idempotency-key': uuidv4()
    }

  try {
    const { data } = await axios.get<IGetChargeResponse>(`${host}/charges/${charge_id}`, { headers });

    return data;
  } catch (error) {
    const
      { response: { data: { error_messages } } } = error,
      errors = error_messages as TypeErrorMessages[];

    return await FunctionCreateErrorLog(errors);
  }
};

export default handle;