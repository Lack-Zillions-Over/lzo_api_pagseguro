
import { ContractChargeCreditCard } from "../contracts/index";

import {
  IChargeRequestCreditCard,
  IChargeResponseCreditCard,
  ICancelChargeRequest,
  ICancelChargeResponse,
  IGetChargeResponse,
} from "../interfaces/index";

import {
  FunctionCreateChargeCreditCard,
  FunctionCancelCharge,
  FunctionGetCharge,
} from '../functions/index';

import {
  ValidateAmountCurrency,
  ValidateAmountValue,
  ValidateDescription,
  ValidatePaymentMethodCapture,
  ValidatePaymentMethodCardExpMonth,
  ValidatePaymentMethodCardExpYear,
  ValidatePaymentMethodCardHolderName,
  ValidatePaymentMethodCardNumber,
  ValidatePaymentMethodCardSecurityCode,
  ValidatePaymentMethodInstallments,
  ValidateAmountInstallmentsValue,
  ValidatePaymentMethodSoftDescription,
  ValidatePaymentMethodType,
  ValidateReferenceId,
  ValidateCancelChargeStatus,
  ValidateCancelChargeCreatedAt,
} from '../validators/index';

class Controller implements ContractChargeCreditCard {
  /**
   * @description Creates a charge on the credit card
   * @param charge Object with charge data
   * @param token PagSeguro API authorization token. [See how to get your token](https://dev.pagseguro.uol.com.br/reference/get-access-token)
   *
   * - Minimum charge amount: R$ 5,00
   * - Minimum charge per installment: R$ 5,00
   */
  async create(charge: IChargeRequestCreditCard, token: string): Promise<IChargeResponseCreditCard> {
    try {
      charge.reference_id = await ValidateReferenceId(charge.reference_id);
      charge.description = await ValidateDescription(charge.description);
      charge.amount.value = await ValidateAmountValue(charge.amount.value.toString());
      charge.amount.currency = await ValidateAmountCurrency(charge.amount.currency);
      charge.payment_method.type = await ValidatePaymentMethodType(charge.payment_method.type) as 'CREDIT_CARD';
      charge.payment_method.installments = await ValidatePaymentMethodInstallments(String(charge.payment_method.installments).padStart(2, "0"));
      charge.payment_method.capture = await ValidatePaymentMethodCapture(String(charge.payment_method.capture));
      charge.payment_method.soft_descriptor = await ValidatePaymentMethodSoftDescription(charge.payment_method.soft_descriptor);
      charge.payment_method.card.number = await ValidatePaymentMethodCardNumber(charge.payment_method.card.number.toString());
      charge.payment_method.card.exp_month = await ValidatePaymentMethodCardExpMonth(charge.payment_method.card.exp_month.toString());
      charge.payment_method.card.exp_year = await ValidatePaymentMethodCardExpYear(charge.payment_method.card.exp_year.toString());
      charge.payment_method.card.security_code = await ValidatePaymentMethodCardSecurityCode(charge.payment_method.card.security_code.toString());
      charge.payment_method.card.holder.name = await ValidatePaymentMethodCardHolderName(charge.payment_method.card.holder.name);

      await ValidateAmountInstallmentsValue(charge.amount.value, charge.payment_method.installments);

      return await FunctionCreateChargeCreditCard(charge, token);
    } catch (error) {
      throw new Error(error);
    }
  };
  /**
   * @description Query a charge by ID.
   */
  async get(charge_id: string, token: string): Promise<IGetChargeResponse> {
    try {
      return await FunctionGetCharge(charge_id, token);
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
   * @description Cancels a charge that has been paid or authorized.
   *
   * See what scenarios are available for return/refund:
   *
   * Credit Card:
   * Charges in the following statuses:
   * - AUTHORIZED : Indicates that the charge is pre-authorized.
   * - PAID : Indicates that the charge is paid (captured).
   *
   * ---
   *
   * - By default a refund of a charge paid by credit card will be made in order to refund the amount on the next card invoices.
   * - Maximum 90 Days to return a Credit Card or Bank Slip charge, after its authorization, i.e. status (PAID).
   * - By default a refund of a charge paid with bank slip will be done in order to credit the balance on a PayPal account. If the buyer does not have an account, he will receive an email with instructions to create an account.
   * - If a credit card charge is returned in the authorized status (AUTHORIZED) the amount will be refunded immediately on the customer's credit card bill. Also, in this same status, the refund can only be made in full (and not in parts).
   * - You can return a charge by credit card or bank slip in paid status (PAID) in full or partial amount, and more than once until the total amount is completed.
   * - The maximum time it takes to return a charge in paid status (PAID) on the card depends on the cardholder's closing invoice. On average, it takes one to two invoices. At bank slip, the maximum time limit for the value to be in the PagSeguro account is up to 2 working days.
   * - Whether a credit return is made on a credit card or bank slip charge in partial change status (PAID), the charge status will not change until the full amount is refunded. When the total amount of the refund is reached, the status of the charge will change to CANCELED.
   */
  async cancel(charge: ICancelChargeRequest, charge_id: string, token: string): Promise<ICancelChargeResponse> {
    try {
      const { created_at, status, payment_method: { type: PaymentMethodType } } = await this.get(charge_id, token);

      if (PaymentMethodType !== 'CREDIT_CARD')
        throw new Error('This type of payment method is not credit card.');

      charge.amount.value = await ValidateAmountValue(charge.amount.value.toString());
      charge.amount.currency = await ValidateAmountCurrency(charge.amount.currency);

      await ValidateCancelChargeStatus(status);
      await ValidateCancelChargeCreatedAt(created_at);

      return await FunctionCancelCharge(charge, charge_id, token);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default Controller;