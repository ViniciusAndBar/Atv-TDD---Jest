export enum Cargo {
    DESENVOLVEDOR = 1,
    DBA = 2,
    TESTADOR = 3,
    GERENTE = 4,
  }
  
  export class Funcionario {
    constructor(
      private nome: string,
      private email: string,
      private salarioBase: number,
      private cargo: Cargo
    ) {}
  
    calcularSalarioLiquido(): number {
      switch (this.cargo) {
        case Cargo.DESENVOLVEDOR:
          return this.salarioBase >= 3000 ? this.salarioBase * 0.8 : this.salarioBase * 0.9;
        case Cargo.DBA:
        case Cargo.TESTADOR:
          return this.salarioBase >= 2000 ? this.salarioBase * 0.75 : this.salarioBase * 0.85;
        case Cargo.GERENTE:
          return this.salarioBase >= 5000 ? this.salarioBase * 0.7 : this.salarioBase * 0.8;
        default:
          throw new Error('Cargo inválido');
      }
    }
  }
  