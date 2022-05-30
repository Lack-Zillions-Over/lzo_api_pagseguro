const validate = (amount_value: number, installments: number): boolean => {
  if (amount_value / installments < 500)
    throw new Error("The minimum value accepted for each installment is R$ 5,00");

  return true;
}

export default validate;