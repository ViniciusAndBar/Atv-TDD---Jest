import { Funcionario, Cargo } from '../src/Funcionario';

describe('Funcionario', () => {
  test('calcularSalarioLiquido retorna salário com desconto correto para DESENVOLVEDOR com salário >= 3000', () => {
    const desenvolvedor = new Funcionario('João', 'joao@example.com', 3500, Cargo.DESENVOLVEDOR);
    expect(desenvolvedor.calcularSalarioLiquido()).toBe(2800);
  });

  // Adicione os outros testes aqui
});
