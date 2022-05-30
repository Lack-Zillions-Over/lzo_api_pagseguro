import {
  IChargeRequestCreditCard,
  IChargeResponseCreditCard,
  ICancelChargeRequest,
  ICancelChargeResponse,
  IGetChargeResponse,
} from '../interfaces/index';

declare interface Contract {
  /**
   * @description Creates a charge on the credit card
   * @param charge Object with charge data
   * @param token PagSeguro API authorization token. [See how to get your token](https://dev.pagseguro.uol.com.br/reference/get-access-token)
   */
  create(charge: IChargeRequestCreditCard, token: string): Promise<IChargeResponseCreditCard>;
  /**
   * @description Query a charge by ID
   * @param charge_id Charge ID
   * @param token PagSeguro API authorization token. [See how to get your token](https://dev.pagseguro.uol.com.br/reference/get-access-token)
   */
  get(charge_id: string, token: string): Promise<IGetChargeResponse>;
  /**
   * @description Cancels a charge that has been paid or authorized
   * @param charge Object with charge return cashback
   * @param charge_id ID of the charge to be canceled
   * @param token PagSeguro API authorization token. [See how to get your token](https://dev.pagseguro.uol.com.br/reference/get-access-token)
   */
  cancel(charge: ICancelChargeRequest, charge_id: string, token: string): Promise<ICancelChargeResponse>;
}

export default Contract;