import { TypePaymentMethodBankSlipHolderAddress } from '../types/index';

declare type Type = {
  /**
   * @description Name of bank slip payer
   */
  name: string;
  /**
   * @description Document number of the bank slip payer
   */
  tax_id: string;
  /**
   * @description Email of the bank slip payer
   */
  email: string;
  /**
   * @description The address object is responsible for representing address data and information. And this object is normally used in conjunction with other objects
   */
  address: TypePaymentMethodBankSlipHolderAddress;
}

export default Type;