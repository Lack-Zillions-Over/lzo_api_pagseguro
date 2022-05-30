import { TypePaymentMethodCardHolder } from '../types/index';

declare type Type = {
  /**
   * @description Saved credit card identifier (Tokenized by PagSeguro)
   *
   * - Function unavailable for the debit card and network token payment method
   */
  id: string;
  /**
   * @description Credit card or debit card number
   */
  number: number;
  /**
   * @description Network token number
   */
  network_token: string;
  /**
   * @description Expiration month of the credit card, debit card, or network token
   */
  exp_month: number;
  /**
   * @description Expiration year of the credit card, debit card, or network token
   */
  exp_year: number;
  /**
   * @description Security Code from your credit card, debit card, or network token
   */
  security_code: number;
  /**
   * @description Indicates whether the card should be stored at PagSeguro for future purchases
   *
   * - If you enter false or omit this parameter it will not be stored
   * - Enter true to store it, in the response you will get the card token in payment_method.card.id. Function unavailable for debit card payment method and network token
   */
  store: boolean;
  /**
   * @description Credit Card Flags:
   *
   * - VISA
   * - MASTERCARD
   * - AMEX
   * - ELO
   * - HIPERCARD
   * - HIPER
   * - DINERS
   *
   * Debit Card Flags:
   * - VISA
   * - MASTERCARD
   * - ELO
   *
   * Network token flags:
   * - VISA
   * - MASTERCARD
   * - ELO
   */
  brand: string;
  /**
   * @description First six numbers of the card or network token (BIN)
   */
  first_digits: number;
  /**
   * @description Last four numbers of the card or network token
   */
  last_digits: number;
  /**
   * @descripion Object containing the cardholder information of the credit card, debit card, and network token
   */
  holder: TypePaymentMethodCardHolder;
}

export default Type;