import { TypePaymentMethod, TypePaymentMethodCard, TypePaymentMethodCardHolder } from '../types/index';

declare type TypeMethod = Pick<TypePaymentMethod,
  | 'installments'
  | 'capture'
  | 'soft_descriptor'
>;

declare type TypeCard = Pick<TypePaymentMethodCard,
  | 'number'
  | 'exp_month'
  | 'exp_year'
  | 'security_code'
>;

declare type TypeHolder = Pick<TypePaymentMethodCardHolder, 'name'>;

declare type Type = TypeMethod & {
  /**
   * @description Indicates the payment method used for the charge
   *
   * - CREDIT_CARD or DEBIT_CARD If the payment method used is credit card, debit card or network token, it is mandatory to send the payment_method.card object.
   *
   * - BOLETO If the payment method used is boleto, it is mandatory to send the payment_method.boleto object.
   */
  type: 'CREDIT_CARD';
  /**
   * @description Object containing credit card, debit card, or network token data.
   *
   * - Required for card or network token payment method.
   */
  card: TypeCard & {
    holder: TypeHolder;
  }
}

export default Type;