import { IChargeResponseBankSlip } from '.';

export interface Interface extends IChargeResponseBankSlip {
  /**
   * @description Bank slip barcode number.
   */
  get_bar_code: string;
  /**
   * @description Formatted bank slip barcode number.
   */
  get_formatted_bar_code: string;
  /**
   * @description Link to bank slip in PDF format.
   */
  get_link_to_pdf: string;
  /**
   * @description Link to bank slip in PNG format.
   */
  get_link_to_png: string;
};

export default Interface;