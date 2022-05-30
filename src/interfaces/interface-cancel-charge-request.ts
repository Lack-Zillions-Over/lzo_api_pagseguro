import { TypeAmount } from '../types/index';

export interface Interface {
  /**
   * @description Object containing the information of the amount to be refunded
   */
  amount: Pick<TypeAmount, 'value' | 'currency'>;
}

export default Interface;