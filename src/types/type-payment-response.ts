declare type Type = {
  /**
   * @description PagSeguro code that indicates the reason for the authorization in payment both for authorized payment when for denied.
   *
   * See the list with details of the [codes](https://dev.pagseguro.uol.com.br/reference/charge-denied-codes).
   *
   * | Code    | Message                                                              | Payment Method           |   |
   * |---------|----------------------------------------------------------------------|--------------------------|---|
   * | 10000   | NOT AUTHORIZED BY PAGSEGURO                                          | All                      |   |
   * | 20000   | SUCESSO                                                              | All                      |   |
   * | -       | -                                                                    | -                        |   |
   * | 20001   | CONTACT YOUR CARD CENTER                                             | Credit Card              |   |
   * | 20001   | INVALID PASSWORD                                                     | Credit Card              |   |
   * | 20001   | SHOPKEEPER, CONTACT THE BUYER                                        | Credit Card              |   |
   * | 20001   | UNLOCK YOUR CARD                                                     | Credit Card              |   |
   * | 20001   | INVALID PASSWORD USE NEW PASSWORD                                    | Credit Card              |   |
   * | -       | -                                                                    | -                        |   |
   * | 20002   | EXPIRED CARD - DON'T TRY AGAIN                                       | Credit Card              |   |
   * | 20003   | NOT AUTHORIZED                                                       | Credit Card              |   |
   * | 20003   | VALUE EXCEEDED. CONTACT YOUR CARD CENTER                             | Credit Card              |   |
   * | 20003   | AMOUNT OF WITHDRAWALS EXCEEDED. CONTACT YOUR CARD CENTER             | Credit Card              |   |
   * | 20003   | EXCEEDED PASSWORD ATTEMPTS. CONTACT YOUR CARD CENTER                 | Credit Card              |   |
   * | 20004   | INVALID REQUEST                                                      | Credit Card              |   |
   * | 20006   | NON-EXISTENT TRANSACTION                                             | Credit Card              |   |
   * | 20007   | CHECK YOUR CARD DATA                                                 | Credit Card              |   |
   * | 20007   | CARD ERROR - DO NOT TRY AGAIN                                        | Credit Card              |   |
   * | 20008   | INSTALLMENT PLAN INVALID - DO NOT TRY AGAIN                          | Credit Card              |   |
   * | 20009   | INVALID CVV                                                          | Credit Card              |   |
   * | 20010   | CANCELED TRANSACTION                                                 | Credit Card              |   |
   * | 20011   | EXCEEDED OPERATION DEADLINE                                          | Credit Card              |   |
   * | 20012   | TRANSACTION AMOUNT NOT ALLOWED - DO NOT TRY AGAIN                    | Credit Card              |   |
   * | 20012   | DIFFERENT VALUE THAN PRE-AUTHORIZATION - DO NOT TRY AGAIN            | Credit Card              |   |
   * | 20013   | FAILURE TO CAPTURE                                                   | Credit Card              |   |
   * | 20014   | CANCELLATION FAILURE                                                 | Credit Card              |   |
   * | 20015   | SYSTEM UNAVAILABLE                                                   | Credit Card              |   |
   * | 20016   | CHECK YOUR CARD DATA                                                 | Credit Card              |   |
   * | 20016   | CARD ERROR - DO NOT TRY AGAIN                                        | Credit Card              |   |
   * | 20016   | INVALID PASSWORD - DO NOT TRY AGAIN                                  | Credit Card              |   |
   * | 20016   | INVALID DESTINATION ACCOUNT - DO NOT TRY AGAIN                       | Credit Card              |   |
   * | 20016   | ORIGIN ACCOUNT INVALID - DO NOT TRY AGAIN                            | Credit Card              |   |
   * | 20016   | TRANSACTION NOT ALLOWED FOR THE CARD - DO NOT TRY AGAIN              | Credit Card              |   |
   * | 20016   | CONTACT YOUR CARD CENTER - DO NOT TRY AGAIN                          | Credit Card              |   |
   * | 20016   | WITHDRAWAL NOT AVAILABLE - DO NOT TRY AGAIN                          | Credit Card              |   |
   * | 20016   | SUSPENSION OF RECURRING PAYMENT FOR SERVICE - DO NOT RETRY           | Credit Card              |   |
   * | 20017   | TRANSACTION NOT ALLOWED - DO NOT TRY AGAIN                           | Credit Card              |   |
   * | 20017   | CONTACT YOUR CARD CENTER - DO NOT TRY AGAIN                          | Credit Card              |   |
   * | 20018   | TRANSACTION NOT ALLOWED - DO NOT TRY AGAIN                           | Credit Card              |   |
   * | 20018   | CONTACT YOUR CARD CENTER - DO NOT TRY AGAIN                          | Credit Card              |   |
   * | 20019   | REDO THE TRANSACTION                                                 | Credit Card              |   |
   * | 20019   | SHOPKEEPER, CONTACT THE BUYER                                        | Credit Card              |   |
   * | 20019   | COMMUNICATION FAILURE - TRY AGAIN LATER                              | Credit Card              |   |
   * | 20019   | CONTACT YOUR CARD CENTER                                             | Credit Card              |   |
   * | 20020   | DATABASE UNAVAILABLE                                                 | Credit Card              |   |
   * | 20021   | UNREGISTERED REQUEST OR OUT-OF-DATE CONSULTATION                     | Credit Card              |   |
   * | 20022   | NUMBER OF ATTEMPTS EXCEEDED                                          | Credit Card              |   |
   * | 20023   | INTEGRATOR ERROR                                                     | Credit Card              |   |
   * | 20024   | TIMEOUT                                                              | Credit Card              |   |
   * | 20025   | EXPIRATION DATE IS INCORRECT                                         | Credit Card              |   |
   * | 20033   | SUSPECTED CARD                                                       | Credit Card              |   |
   * | 20037   | FRAUDULENT CARD                                                      | Credit Card              |   |
   * | 20039   | TRANSACTION NOT ALLOWED - DO NOT TRY AGAIN                           | Credit Card              |   |
   * | 20039   | CONTACT YOUR CARD CENTER - DO NOT TRY AGAIN                          | Credit Card              |   |
   * | 20039   | TRANSACTION NOT ALLOWED FOR THE CARD - DO NOT TRY AGAIN              | Credit Card              |   |
   * | 20040   | CANCELED CARD                                                        | Credit Card              |   |
   * | 20064   | TRANSACTION ALREADY EXISTS                                           | Credit Card              |   |
   * | 20065   | CARD NOT CONFIGURED                                                  | Credit Card              |   |
   * | 20066   | UNDONE TRANSACTION                                                   | Credit Card              |   |
   * | 20159   | UNAUTHORIZED                                                         | Credit Card              |   |
   * | 20163   | TRANSACTION ALREADY CANCELED                                         | Credit Card              |   |
   * | 20165   | TIMEOUT                                                              | Credit Card              |   |
   * | 20166   | CONTACT YOUR CARD CENTER - DO NOT TRY AGAIN                          | Credit Card              |   |
   * | 20167   | TRANSACTION ALREADY EXISTS                                           | Credit Card              |   |
   * | 20168   | CONTACT YOUR CARD CENTER                                             | Credit Card              |   |
   * | 20169   | CARD DOES NOT ALLOW INTERNATIONAL TRANSACTION                        | Credit Card              |   |
   * | 20169   | USE CREDIT FUNCTION                                                  | Credit Card              |   |
   * | 20169   | USE DEBIT FUNCTION                                                   | Credit Card              |   |
   * | 20170   | BAD DATA                                                             | Credit Card              |   |
   * | 20172   | INVALID TOKEN                                                        | Credit Card              |   |
   * | 20404   | ERROR WHEN EXECUTING OPERATION                                       | Credit Card              |   |
   * | 20999   | DISABLED PURCHASER                                                   | Credit Card              |   |
   */
  code: number;
  /**
   * @description Friendly message describing the reason for not approving or authorizing the charge
   *
   * - Compatible with ABECS standard - [Normative 21](https://api.abecs.org.br/wp-content/uploads/2019/09/Normativo-021.pdf).
   */
  message: string;
  /**
   * @description NSU of the authorization, if the payment is approved by the Issuer.
   */
  reference: string;
}

export default Type;