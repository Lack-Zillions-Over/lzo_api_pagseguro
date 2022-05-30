import { TypePaymentLinksMedia, TypePaymentLinksRel, TypePaymentLinksType } from "../types/index";

declare type Type = {
  /**
   * @description Indicates the type of relationship to the resource
   */
  rel: TypePaymentLinksRel;
  /**
   * @description HTTP address of the resource
   */
  href: string;
  /**
   * @description Type of media to which the link responds or accepts.
   * - application/json
   * - application/pdf
   * - application/image
   */
  media: TypePaymentLinksMedia;
  /**
   * @description HTTP method in use
   * - GET
   * - POST
   * - DELETE
   * - PUT
   */
  type: TypePaymentLinksType;
}

export default Type;