import path from 'path';
import fs from 'fs';

import { TypeErrorMessages } from '../types/index';

const handle = async (errors: TypeErrorMessages[]) => {
  const
    fileName = path.resolve(__dirname, '../../../lzo-api-pagseguro-error-log.txt'),
    content = `${`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`} - ${JSON.stringify(errors, null, 2)}\r\n\n`;

  fs.appendFileSync(fileName, content);

  throw new Error(`The PagSeguro API returned an error. Check the log file at ${fileName}`);
};

export default handle;