import { ChargeBankSlip } from '../index';

describe('Testing charge methods with bank slip', () => {
  it('Can create charge', async () => {
    const charge = await ChargeBankSlip.create({
      reference_id: `REF-${new Date().getTime()}`,
      description: 'I\'m a new charge, please pay me, thanks!',
      amount: {
        value: 9999, // R$ 99,99
        currency: 'BRL',
      },
      payment_method: {
        type: 'BOLETO',
        soft_descriptor: 'LZO and PagSeguro',
        boleto: {
          due_date: "2024-12-31",
          instruction_lines: {
            line_1: "Payment processed for DESC Invoice",
            line_2: "By PagSeguro"
          },
          holder: {
            name: "Jose da Silva",
            tax_id: "22222222222",
            email: "jose@email.com",
            address: {
              street: "Avenida Brigadeiro Faria Lima",
              number: "1384",
              complement: "",
              locality: "Pinheiros",
              city: "Sao Paulo",
              region: "Sao Paulo",
              region_code: 'SP',
              country: "Brasil",
              postal_code: "01452002"
            }
          }
        }
      },
      notification_urls: []
    }, process.env.PAGSEGURO_TOKEN);

    expect(charge.id).toBeDefined();
    expect(charge.status).toBe('WAITING');
    expect(charge.get_bar_code.length).toBeGreaterThan(0);
    expect(charge.get_formatted_bar_code.length).toBeGreaterThan(0);
    expect(charge.get_link_to_pdf.length).toBeGreaterThan(0);
  }, 60000);

  it('Can cancel charge', async () => {
    const charge = await ChargeBankSlip.create({
      reference_id: `REF-${new Date().getTime()}`,
      description: 'I\'m a new charge, please pay me, thanks!',
      amount: {
        value: 500, // R$ 5,00
        currency: 'BRL',
      },
      payment_method: {
        type: 'BOLETO',
        soft_descriptor: 'LZO and PagSeguro',
        boleto: {
          due_date: "2024-12-31",
          instruction_lines: {
            line_1: "Payment processed for DESC Invoice",
            line_2: "By PagSeguro"
          },
          holder: {
            name: "Jose da Silva",
            tax_id: "22222222222",
            email: "jose@email.com",
            address: {
              street: "Avenida Brigadeiro Faria Lima",
              number: "1384",
              complement: "",
              locality: "Pinheiros",
              city: "Sao Paulo",
              region: "Sao Paulo",
              region_code: 'SP',
              country: "Brasil",
              postal_code: "01452002"
            }
          }
        }
      },
      notification_urls: []
    }, process.env.PAGSEGURO_TOKEN);

    expect(charge.id).toBeDefined();
    expect(charge.status).toBe('WAITING');
    expect(charge.get_bar_code.length).toBeGreaterThan(0);
    expect(charge.get_formatted_bar_code.length).toBeGreaterThan(0);
    expect(charge.get_link_to_pdf.length).toBeGreaterThan(0);

    setTimeout(async () => {
      await expect(
        ChargeBankSlip.cancel({
          amount: {
            value: 500, // R$ 5,00
            currency: 'BRL',
          }
        }, charge.id, process.env.PAGSEGURO_TOKEN)
      )
        .rejects
        .toThrow('Error: This charge is not paid or authorized.');
    }, 18000);
  }, 60000);
});