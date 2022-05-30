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
   * - WAITING : Indicates that the collection is awaiting payment.
   * - PAID : Indicates that the charge has been paid.
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
   * @description Description of the charge.
   */
  description: string;
  /**
   * @description Objeto contendo as informações do valor que foi cobrado.
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