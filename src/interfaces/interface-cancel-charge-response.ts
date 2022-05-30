import { TypeAmount, TypePaymentLinks, TypePaymentMethod, TypePaymentResponse, TypeStatus } from '../types/index';

export interface Interface {
  /**
   * @description PagSeguro billing identifier.
   */
  id: string;
  /**
   * @description Own identifier assigned for the charge.
   */
  reference_id: string;
  /**
   * @description Billing status.
   * - AUTHORIZED : Indicates that the charge is pre-authorized.
   * - PAID : Indicates that the charge is paid (captured).
   * - DECLINED : Indicates that the collection was denied by PagSeguro or Issuer.
   * - CANCELED : Indicates that the charge has been canceled.
   */
  status: TypeStatus;
  /**
   * @description Date and time when the charge was created.
   * - Format: [ISO 8601.](https://pt.wikipedia.org/wiki/ISO_8601)
   */
  created_at: string;
  /**
   * @description Date and time when the charge was paid (captured).
   * - Format: [ISO 8601.](https://pt.wikipedia.org/wiki/ISO_8601)
   */
  paid_at: string;
  /**
   * @description Description of the charge.
   */
  description: string;
  /**
   * @description Object containing the information of the amount that was charged.
   */
  amount: TypeAmount;
  /**
   * @description Object containing Payment Provider Response information.
   */
  payment_response: TypePaymentResponse;
  /**
   * @description Object containing the payment method information of the charge.
   */
  payment_method: TypePaymentMethod;
  /**
   * @description URLs that will be notified whenever a change in the object (charge) occurs.
   * - It must be in a secure environment with SSL(HTTPS).
   */
  notification_urls: string[];
  /**
   * @description Object containing the link information related to the resource.
   */
  links: TypePaymentLinks[];
  /**
   * @description Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format
   */
  metadata?: Record<string, string | number | boolean>[];
}

export default Interface;