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
   * - WAITING : Indicates that the collection is awaiting payment.
   * - PAID : Indicates that the charge has been paid.
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
}

export default Interface;