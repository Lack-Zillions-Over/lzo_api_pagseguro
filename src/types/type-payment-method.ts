import { TypePaymentMethodType, TypePaymentMethodAuthenticationMethod, TypePaymentMethodBankSlip, TypePaymentRecurring, TypePaymentSubMerchant, TypePaymentMethodCard, TypePaymentLinks } from '../types/index';

declare type Type = {
  /**
   * @description Indicates the payment method used for the charge
   *
   * - CREDIT_CARD or DEBIT_CARD If the payment method used is credit card, debit card or network token, it is mandatory to send the payment_method.card object.
   *
   * - BOLETO If the payment method used is boleto, it is mandatory to send the payment_method.boleto object.
   */
  type: TypePaymentMethodType;
  /**
   * @description Number of installments. Required for credit card payment method.
   */
  installments: number;
  /**
   * @description Parameter that indicates whether a credit card transaction should only be pre-authorized (reserves the charge amount on the customer's card for up to 5 days) or whether the transaction should be automatically captured (one-step charge).
   *
   * - Enter false to pre-authorize
   * - Or true for one-step billing.
   *
   * Mandatory for credit card payment method. Function unavailable for debit card and network token (debit) payment method.
   *
   * Credit Card Flags:
   * - VISA
   * - MASTERCARD
   * - AMEX
   * - ELO
   *
   * Network token flags (credit):
   * - VISA
   * - MASTERCARD
   * - ELO
   */
  capture: boolean;
  /**
   * @description Parameter responsible for what will be displayed as the Name on the customer Invoice (currently only applicable for Credit Card)
   *
   * - Does not allow special characters. (Accent marks will be replaced with non-accent marks, other special characters will be removed)
   */
  soft_descriptor: string;
  /**
   * @description Object containing credit card, debit card, or network token data.
   *
   * - Required for card or network token payment method.
   */
  card: TypePaymentMethodCard;
  /**
   * @description Object containing the additional authentication data linked to a transaction.
   *
   * - Mandatory when payment_method.type = DEBIT_CARD
   */
  authentication_method: TypePaymentMethodAuthenticationMethod;
  /**
   * @description Object containing the data for generating the bank slip
   */
  boleto: TypePaymentMethodBankSlip;
  /**
   * @description Object containing the recurrence information. Customers who have their own recurrence must use this parameter to indicate to PagSeguro that the collection is related to a recurring payment. The use of this parameter is not linked to PagSeguro's API for Recurring Payment.
   */
  recurring: TypePaymentRecurring;
  /**
   * @description Object containing the sub tenant data, used by sub acquirers for credit card transactions. Used only by authorized sub acquirers.
   * - PagSeguro does not perform any analysis or treatment on this data, it is used exclusively for forwarding to the banner.
   */
  sub_merchant: TypePaymentSubMerchant;
  /**
   * @description URLs that will be notified whenever a change in the object (charge) occurs.
   * - It must be in a secure environment with SSL(HTTPS).
   */
  notification_urls: string[];
  /**
   * @description Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format
   */
  metadata: Record<string, string | number | boolean>[];
  /**
   * @description Object containing the link information related to the resource.
   */
  links: TypePaymentLinks[]
}

export default Type;