declare type Type = {
  /**
   * @description Street of address
   */
  street: string;
  /**
   * @description Number of address
   */
  number: string;
  /**
   * @description Complement of address
   */
  complement: string;
  /**
   * @description Neighborhood of address
   */
  locality: string;
  /**
   * @description City of address
   */
  city: string;
  /**
   * @description Name of the State
   */
  region: string;
  /**
   * @description State Code. [Pattern ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)
   */
  region_code: string;
  /**
   * @description Country of address
   */
  country: string;
  /**
   * @description ZIP code of address
   */
  postal_code: string;
}

export default Type;