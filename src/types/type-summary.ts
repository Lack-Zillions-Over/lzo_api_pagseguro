declare type Type = {
  /**
   * @description Total amount of the charge
   */
  total: number;
  /**
   * @description Amount that was paid in the charge
   */
  paid: number;
  /**
   * @description Amount that was returned from the charge
   */
  refunded: number;
}

export default Type;