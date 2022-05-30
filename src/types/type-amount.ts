import { TypeAmountCurrency, TypeSummary } from '../types/index'

declare type Type = {
  /**
   * @description Amount to be charged in cents.
   *
   * Only positive integers.
   *
   * Example:
   * - R$ 1.500,99 = 150099
   * - R$ 5,00 = 500
   * - R$ 960,75 = 96075
   */
  value: number;
  /**
   * @description Three-letter, uppercase [ISO](https://pt.wikipedia.org/wiki/ISO_4217) currency code.
   *
   * - For now, only the Brazilian Real ("BRL") is supported.
   */
  currency: TypeAmountCurrency;
  /**
   * @description Object containing a summary of charge values.
   */
  summary: TypeSummary
}

export default Type;