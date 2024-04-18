export class Triangulo {
    constructor() {}

    verificarTriangulo(lado1: number, lado2: number, lado3: number): string {
        if (!this.trianguloEValido(lado1, lado2, lado3)) {
            return "Não é um triângulo válido";
        } else if (this.eEquilatero(lado1, lado2, lado3)) {
            return "Triângulo Equilátero";
        } else if (this.eIsosceles(lado1, lado2, lado3)) {
            return "Triângulo Isósceles";
        } else {
            return "Triângulo Escaleno";
        }
    }

    private trianguloEValido(lado1: number, lado2: number, lado3: number): boolean {
        if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            return false;
        } else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
            return false;
        } else {
            return true;
        }
    }

    private eIsosceles(lado1: number, lado2: number, lado3: number): boolean {
        return lado1 === lado2 || lado1 === lado3 || lado2 === lado3;
    }

    private eEquilatero(lado1: number, lado2: number, lado3: number): boolean {
        return lado1 === lado2 && lado1 === lado3;
    }
}
