
import { ContractChargeBankSlip } from "../contracts/index";

import {
  IChargeRequestBankSlip,
  IChargeResponseBankSlipCustom,
  ICancelChargeRequest,
  ICancelChargeResponse,
  IGetChargeResponse,
} from "../interfaces/index";

import {
  FunctionCreateChargeBankSlip,
  FunctionCancelCharge,
  FunctionGetCharge,
} from '../functions/index';

import {
  ValidateReferenceId,
  ValidateAmountCurrency,
  ValidateAmountValue,
  ValidateDescription,
  ValidatePaymentMethodSoftDescription,
  ValidatePaymentMethodType,
  ValidatePaymentMethodBankSlipDueDate,
  ValidatePaymentMethodBankSlipHolderName,
  ValidatePaymentMethodBankSlipHolderTaxId,
  ValidatePaymentMethodBankSlipHolderEmail,
  ValidatePaymentMethodBankSlipHolderAddressStreet,
  ValidatePaymentMethodBankSlipHolderAddressNumber,
  ValidatePaymentMethodBankSlipHolderAddressComplement,
  ValidatePaymentMethodBankSlipHolderAddressRegion,
  ValidatePaymentMethodBankSlipHolderAddressRegionCode,
  ValidatePaymentMethodBankSlipHolderAddressCity,
  ValidatePaymentMethodBankSlipHolderAddressCountry,
  ValidatePaymentMethodBankSlipHolderAddressLocality,
  ValidatePaymentMethodBankSlipHolderAddressPostalCode,
  ValidatePaymentMethodBankSlipInstructionLinesLine1,
  ValidatePaymentMethodBankSlipInstructionLinesLine2,
  ValidateCancelChargeStatus,
  ValidateCancelChargeCreatedAt,
} from '../validators/index';

class Controller implements ContractChargeBankSlip {
  /**
   * @description Create a bank slip for a charge
   * @param charge Object with charge data
   * @param token PagSeguro API authorization token. [See how to get your token](https://dev.pagseguro.uol.com.br/reference/get-access-token)
   *
   * - Minimum Value: R$ 5,00
   */
  async create(charge: IChargeRequestBankSlip, token: string): Promise<IChargeResponseBankSlipCustom> {
    try {
      charge.reference_id = await ValidateReferenceId(charge.reference_id);
      charge.description = await ValidateDescription(charge.description);
      charge.amount.value = await ValidateAmountValue(charge.amount.value.toString());
      charge.amount.currency = await ValidateAmountCurrency(charge.amount.currency);
      charge.payment_method.type = await ValidatePaymentMethodType(charge.payment_method.type) as 'BOLETO';
      charge.payment_method.soft_descriptor = await ValidatePaymentMethodSoftDescription(charge.payment_method.soft_descriptor);
      charge.payment_method.boleto.due_date = await ValidatePaymentMethodBankSlipDueDate(charge.payment_method.boleto.due_date);
      charge.payment_method.boleto.holder.name = await ValidatePaymentMethodBankSlipHolderName(charge.payment_method.boleto.holder.name);
      charge.payment_method.boleto.holder.tax_id = await ValidatePaymentMethodBankSlipHolderTaxId(charge.payment_method.boleto.holder.tax_id);
      charge.payment_method.boleto.holder.email = await ValidatePaymentMethodBankSlipHolderEmail(charge.payment_method.boleto.holder.email);
      charge.payment_method.boleto.holder.address.street = await ValidatePaymentMethodBankSlipHolderAddressStreet(charge.payment_method.boleto.holder.address.street);
      charge.payment_method.boleto.holder.address.complement = await ValidatePaymentMethodBankSlipHolderAddressComplement(charge.payment_method.boleto.holder.address.complement);
      charge.payment_method.boleto.holder.address.number = await ValidatePaymentMethodBankSlipHolderAddressNumber(charge.payment_method.boleto.holder.address.number);
      charge.payment_method.boleto.holder.address.locality = await ValidatePaymentMethodBankSlipHolderAddressLocality(charge.payment_method.boleto.holder.address.locality);
      charge.payment_method.boleto.holder.address.region = await ValidatePaymentMethodBankSlipHolderAddressRegion(charge.payment_method.boleto.holder.address.region);
      charge.payment_method.boleto.holder.address.region_code = await ValidatePaymentMethodBankSlipHolderAddressRegionCode(charge.payment_method.boleto.holder.address.region_code)
      charge.payment_method.boleto.holder.address.city = await ValidatePaymentMethodBankSlipHolderAddressCity(charge.payment_method.boleto.holder.address.city);
      charge.payment_method.boleto.holder.address.country = await ValidatePaymentMethodBankSlipHolderAddressCountry(charge.payment_method.boleto.holder.address.country);
      charge.payment_method.boleto.holder.address.postal_code = await ValidatePaymentMethodBankSlipHolderAddressPostalCode(charge.payment_method.boleto.holder.address.postal_code);
      charge.payment_method.boleto.instruction_lines.line_1 = await ValidatePaymentMethodBankSlipInstructionLinesLine1(charge.payment_method.boleto.instruction_lines.line_1);
      charge.payment_method.boleto.instruction_lines.line_2 = await ValidatePaymentMethodBankSlipInstructionLinesLine2(charge.payment_method.boleto.instruction_lines.line_2);

      const bankSlip = await FunctionCreateChargeBankSlip(charge, token);

      return {
        ...bankSlip,
        get_bar_code: bankSlip.payment_method.boleto.barcode,
        get_formatted_bar_code: bankSlip.payment_method.boleto.formatted_barcode,
        get_link_to_pdf: (() => {
          const links = bankSlip.links;

          return links.find(link => link.media === 'application/pdf').href || '';
        })(),
        get_link_to_png: (() => {
          const links = bankSlip.links;

          return links.find(link => link.media === 'application/image' || link.media === 'image/png').href || '';
        })()
      }
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
   * @description Cancels a charge that has been paid.
   *
   * See what scenarios are available for return/refund:
   *
   * Bank Slip:
   * Charges in the following statuses:
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

      if (PaymentMethodType !== 'BOLETO')
        throw new Error('This type of payment method is not bank slip.');

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