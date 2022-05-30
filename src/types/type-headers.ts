declare type Type = {
  /**
   * @description PagSeguro API authorization token.
   *
   * - [See how to get your token](https://dev.pagseguro.uol.com.br/reference/get-access-token)
   */
  'Authorization': string;
  /**
   * @description Type of content sent in the request.
   *
   * - Default: application/json
   */
  'Content-Type': 'application/json';
  /**
   * @description Unique identifier of the request.
   * - Used to avoid duplicate transactions, fraud, and other situations.
   */
  'x-idempotency-key': string;
};

export default Type;