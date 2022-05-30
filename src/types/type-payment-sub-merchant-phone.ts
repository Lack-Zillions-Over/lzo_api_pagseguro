import { TypePaymentSubMerchantPhoneType } from "../types/index";

declare type Type = {
  /**
   * @description Country Operator Code (DDI)
   *
   * Presence
   * - REQUEST: Conditional
   * - RESPONSE: Conditional
   */
  country: number;
  /**
   * @description Local Operator Code (Area Code)
   *
   * Presence
   * - REQUEST: Conditional
   * - RESPONSE: Conditional
   */
  area: number;
  /**
   * @description Phone number
   */
  number: number;
  /**
   * @description Indicates the type of phone:
   *
   * - CELLPHONE If it is a cell phone.
   * - BUSINESS If it is a business telephone.
   *
   * Presence
   * - REQUEST: Conditional
   * - RESPONSE: Conditional
   */
  type: TypePaymentSubMerchantPhoneType;
}

export default Type;