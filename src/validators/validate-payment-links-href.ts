const validate = (payment_links_href: string): string => {
  if (!payment_links_href.length || payment_links_href.length < 5 || payment_links_href.length > 2048) {
    throw new Error('Invalid payment_links_href! This length need to be bigger or equal 5 and lesser or equal 2048');
  }

  return payment_links_href;
}

export default validate;