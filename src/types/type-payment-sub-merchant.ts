import { TypePaymentMethodBankSlipHolderAddress, TypePaymentSubMerchantPhone } from '../types/index';

declare type Type = {
  /**
   * @description Proper identifier referring to the merchant assigned on the sub-acquirer's platform.
   */
  reference_id: string;
  /**
   * @description Corporate name of the merchant in the sub-acquirer's platform in case of a legal entity. In case of an individual, the full name of the merchant in the sub acquirer's platform.
   */
  name: string;
  /**
   * @description Document number (CPF or CNPJ) of the merchant in the sub-acquirer's platform. Only numbers must be entered (with or without mask).
   */
  tax_id: string;
  /**
   * @description Merchant category code on the sub-acquirer's platform. Only numbers should be entered. Default block for high-risk MCC cases. Examples: 0763, 5199.
   */
  mcc: string;
  /**
   * @description Object containing the retailer's address information on the sub acquirer's platform.
   */
  address: TypePaymentMethodBankSlipHolderAddress;
  /**
   * @description Object containing a list of the shopkeeper's contact phone numbers on the sub acquirer's platform. Must be entered for transactions with the ELO flag.
   */
  phone: TypePaymentSubMerchantPhone[]
}

export default Type;