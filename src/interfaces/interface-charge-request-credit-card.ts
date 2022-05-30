import { TypeAmount, TypePaymentMethodCreditCard } from '../types/index';

export interface Interface {
  /**
   * @description Own identifier assigned for the charge.
   */
  reference_id: string;
  /**
   * @description Description of the charge.
   */
  description: string;
  /**
   * @description Object containing the information of the amount to be charged.
   */
  amount: Pick<TypeAmount, 'value' | 'currency'>;
  /**
   * @description Object containing the payment method information of the charge.
   */
  payment_method: TypePaymentMethodCreditCard;
  /**
   * @description URLs that will be notified whenever a change in the object (charge) occurs.
   * - It must be in a secure environment with SSL(HTTPS).
   */
  notification_urls: string[];
  /**
   * @description Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format
   */
  metadata?: Record<string, string | number | boolean>[];
}

export default Interface;