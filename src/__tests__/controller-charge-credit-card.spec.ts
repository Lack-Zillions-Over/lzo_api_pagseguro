import { ChargeCreditCard } from '../index';

describe('Testing charge methods with credit card', () => {
  it('Can create charge without capture', async () => {
    const charge = await ChargeCreditCard.create({
      reference_id: `REF-${new Date().getTime()}`,
      description: 'I\'m a new charge, please pay me, thanks!',
      amount: {
        value: 500, // R$ 5,00
        currency: 'BRL',
      },
      payment_method: {
        type: 'CREDIT_CARD',
        capture: false,
        installments: 1,
        soft_descriptor: 'LZO and PagSeguro',
        card: {
          number: 4539620659922097,
          security_code: 123,
          exp_month: 12,
          exp_year: 2026,
          holder: {
            name: 'John Doe',
          }
        }
      },
      notification_urls: []
    }, process.env.PAGSEGURO_TOKEN);

    expect(charge.id).toBeDefined();
    expect(charge.status).toBe('AUTHORIZED');
    expect(charge.links.length).toBeGreaterThan(0);
  }, 60000);

  it('Can create charge and capture', async () => {
    const charge = await ChargeCreditCard.create({
      reference_id: `REF-${new Date().getTime()}`,
      description: 'I\'m a new charge, please pay me, thanks!',
      amount: {
        value: 120099, // R$ 1.200,99
        currency: 'BRL',
      },
      payment_method: {
        type: 'CREDIT_CARD',
        capture: true,
        installments: 1,
        soft_descriptor: 'LZO',
        card: {
          number: 4539620659922097,
          security_code: 123,
          exp_month: 12,
          exp_year: 2026,
          holder: {
            name: 'Lucas Zon',
          }
        }
      },
      notification_urls: []
    }, process.env.PAGSEGURO_TOKEN);

    expect(charge.id).toBeDefined();
    expect(charge.status).toBe('PAID');
    expect(charge.links.length).toBeGreaterThan(0);
  }, 60000);

  it('Can create charge with credit card invalid', async () => {
    const charge = await ChargeCreditCard.create({
      reference_id: `REF-${new Date().getTime()}`,
      description: 'I\'m a new charge, please pay me, thanks!',
      amount: {
        value: 1000, // R$ 10,00
        currency: 'BRL',
      },
      payment_method: {
        type: 'CREDIT_CARD',
        capture: true,
        installments: 2,
        soft_descriptor: 'LZO',
        card: {
          number: 372938001199778,
          security_code: 1234,
          exp_month: 12,
          exp_year: 2026,
          holder: {
            name: 'Diego Moon',
          }
        }
      },
      notification_urls: []
    }, process.env.PAGSEGURO_TOKEN);

    expect(charge.id).toBeDefined();
    expect(charge.status).toBe('DECLINED');
    expect(charge.links.length).toBeGreaterThan(0);
  }, 60000);

  it('Can cancel charge', async () => {
    const charge = await ChargeCreditCard.create({
      reference_id: `REF-${new Date().getTime()}`,
      description: 'I\'m a new charge, please pay me, thanks!',
      amount: {
        value: 500, // R$ 5,00
        currency: 'BRL',
      },
      payment_method: {
        type: 'CREDIT_CARD',
        capture: false,
        installments: 1,
        soft_descriptor: 'LZO and PagSeguro',
        card: {
          number: 4539620659922097,
          security_code: 123,
          exp_month: 12,
          exp_year: 2026,
          holder: {
            name: 'John Doe',
          }
        }
      },
      notification_urls: []
    }, process.env.PAGSEGURO_TOKEN);

    expect(charge.id).toBeDefined();
    expect(charge.status).toBe('AUTHORIZED');
    expect(charge.links.length).toBeGreaterThan(0);

    setTimeout(async () => {
      const cancel = await ChargeCreditCard.cancel({
        amount: {
          value: 500, // R$ 5,00
          currency: 'BRL',
        }
      }, charge.id, process.env.PAGSEGURO_TOKEN);

      expect(cancel.status).toBe('CANCELED');
    }, 18000);
  }, 60000);
});