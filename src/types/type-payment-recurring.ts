import { TypePaymentRecurringType } from "../types/index";

declare type Type = {
  /**
   * @description Indicates whether the charge comes from a recurrence.
   * - INITIAL : For the first charge of the recurrence.
   * - SUBSEQUENT : For subsequent charges.
   */
  type: TypePaymentRecurringType;
}

export default Type;