import { TypePaymentMethod, TypePaymentMethodBankSlip } from '../types/index';

declare type TypeMethod = Pick<TypePaymentMethod,
  | 'soft_descriptor'
>;

declare type TypeBankSlip = Pick<TypePaymentMethodBankSlip,
  | 'due_date'
  | 'holder'
  | 'instruction_lines'
>;

declare type Type = TypeMethod  & {
  /**
   * @description Indicates the payment method used for the charge.
   *
   * - CREDIT_CARD or DEBIT_CARD If the payment method used is credit card, debit card or network token, it is mandatory to send the payment_method.card object.
   *
   * - BOLETO If the payment method used is boleto, it is mandatory to send the payment_method.boleto object.
   */
  type: 'BOLETO';
  /**
   * @description Object containing the data for generating the bank slip
   */
  boleto: TypeBankSlip;

}

export default Type;