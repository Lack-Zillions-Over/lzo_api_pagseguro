import { TypePaymentMethodCardHolderTokenDataWallet } from '../types/index';

declare type Type = {
  /**
   * @description Identifier of the person who generated the network token (Token Requestor)
   */
  requestor_id: string;
  /**
   * @description Type of wallet that stored the network token
   * - APPLE_PAY
   * - GOOGLE_PAY
   * - SAMSUNG_PAY
   * - MERCHANT_TOKENIZATION_PROGRAM
   */
  wallet: TypePaymentMethodCardHolderTokenDataWallet;
  /**
   * @description Cryptogram generated by the flag
   */
  cryptogram: string;
  /**
   * @description Identifier of the source domain of the transaction, commonly characterized in a reverse domain format
   *
   * Example:
   * - br.com.pagseguro
   */
  ecommerce_domain: string;
  /**
   * @description Content that indicates the trust level of the network token
   */
  assurance_level: number;
}

export default Type;