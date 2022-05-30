import { TypePaymentMethodCardHolderTokenData } from '../types/index';

declare type Type = {
  /**
   * @description Name of the cardholder of the credit card, debit card, and network token
   */
  name: string;
  /**
   * @description Document number of the cardholder's credit card, debit card, and network token
   */
  tax_id: string;
  /**
   * @description Object containing the additional Network Tokenization data. Must be sent when a credit or debit card tokenized by the flags Visa or Mastercard is used
   */
  token_data: TypePaymentMethodCardHolderTokenData;
}

export default Type;