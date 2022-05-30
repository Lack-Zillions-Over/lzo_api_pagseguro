import { TypePaymentMethodBankSlipHolder, TypePaymentMethodBankSlipInstructionLines } from '../types/index';

declare type Type = {
  /**
   * @description Due date of the bank slip. Format: “yyyy-MM-dd”
   */
  due_date: `${number}-${number}-${number}`;
  /**
   * @description Bank slip barcode number
   */
  barcode: string;
  /**
   * @description Formatted bank slip barcode number
   */
  formatted_barcode: string;
  /**
   * @description Object containing the bank slip instruction lines
   */
  instruction_lines: TypePaymentMethodBankSlipInstructionLines;
  /**
   * @description Object containing the Bank slip payer information
   */
  holder: TypePaymentMethodBankSlipHolder;
}

export default Type;