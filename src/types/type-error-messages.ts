declare type Type = {
  /**
   * @description Code of error. See the documentation for details of the codes.
   *
   * - [Error table](https://dev.pagseguro.uol.com.br/reference/charge-error)
   * - [Reasons of denial](https://dev.pagseguro.uol.com.br/reference/charge-denied-codes)
   */
  code: string;
  /**
   * @description Message explaining the error.
   */
  message: string;
  /**
   * @description Description of the error.
   */
  description: string;
  /**
   * @description Name of the parameter where the error was found.
   */
  parameter_name: string
}

export default Type;