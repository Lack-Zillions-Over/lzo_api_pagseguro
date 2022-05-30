import { TypeAmountCurrency } from '../types/index';

const validate = (amount_currency: TypeAmountCurrency): TypeAmountCurrency => {
  const validAmountCurrency: TypeAmountCurrency[] = ['BRL'];

  if (!amount_currency.length || amount_currency.length < 3 || amount_currency.length > 3) {
    throw new Error('Invalid description! This length need to be equal 3');
  }

  if (validAmountCurrency.filter(item => item === amount_currency).length === 0) {
    throw new Error('Invalid amount currency! This value need to be one of the following: BRL');
  }

  return amount_currency;
}

export default validate;