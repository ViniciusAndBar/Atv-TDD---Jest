import { Triangulo } from '../src/Triangulo';

describe('Triangulo', () => {
  let triangulo: Triangulo;

  beforeEach(() => {
    triangulo = new Triangulo();
  });

  test('verificarTriangulo retorna Triângulo Escaleno para um triângulo válido', () => {
    expect(triangulo.verificarTriangulo(3, 4, 5)).toBe('Triângulo Escaleno');
  });

  test('verificarTriangulo retorna Triângulo Isósceles para um triângulo válido', () => {
    expect(triangulo.verificarTriangulo(3, 3, 4)).toBe('Triângulo Isósceles');
  });

  test('verificarTriangulo retorna Triângulo Equilátero para um triângulo válido', () => {
    expect(triangulo.verificarTriangulo(2, 2, 2)).toBe('Triângulo Equilátero');
  });

  test('verificarTriangulo retorna Triângulo Isósceles para diferentes permutações dos mesmos valores', () => {
    expect(triangulo.verificarTriangulo(3, 4, 3)).toBe('Triângulo Isósceles');
    expect(triangulo.verificarTriangulo(4, 3, 3)).toBe('Triângulo Isósceles');
    expect(triangulo.verificarTriangulo(3, 3, 4)).toBe('Triângulo Isósceles');
  });

  test('verificarTriangulo retorna "Não é um triângulo válido" para um lado igual a zero', () => {
    expect(triangulo.verificarTriangulo(0, 4, 5)).toBe('Não é um triângulo válido');
  });

  test('verificarTriangulo retorna "Não é um triângulo válido" para um lado negativo', () => {
    expect(triangulo.verificarTriangulo(-3, 4, 5)).toBe('Não é um triângulo válido');
  });

  test('verificarTriangulo retorna "Não é um triângulo válido" quando a soma de dois lados é igual ao terceiro lado', () => {
    expect(triangulo.verificarTriangulo(1, 2, 1)).toBe('Não é um triângulo válido');
    expect(triangulo.verificarTriangulo(1, 1, 2)).toBe('Não é um triângulo válido');
    expect(triangulo.verificarTriangulo(2, 1, 1)).toBe('Não é um triângulo válido');
  });

  test('verificarTriangulo retorna "Não é um triângulo válido" quando a soma de dois lados é menor que o terceiro lado', () => {
    expect(triangulo.verificarTriangulo(1, 2, 4)).toBe('Não é um triângulo válido');
    expect(triangulo.verificarTriangulo(4, 1, 2)).toBe('Não é um triângulo válido');
    expect(triangulo.verificarTriangulo(2, 4, 1)).toBe('Não é um triângulo válido');
  });

  test('verificarTriangulo retorna "Não é um triângulo válido" para três lados iguais a zero', () => {
    expect(triangulo.verificarTriangulo(0, 0, 0)).toBe('Não é um triângulo válido');
  });
});
