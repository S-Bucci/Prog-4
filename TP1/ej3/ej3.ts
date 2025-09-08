abstract class Empleado {
  protected nombre: string;
  protected salarioBase: number;

  constructor(nombre: string, salarioBase: number) {
    this.nombre = nombre;
    this.salarioBase = salarioBase;
  }
  abstract calcularSalario(): number;

  getNombre(): string {
    return this.nombre;
  }
}

class EmpleadoTiempoCompleto extends Empleado {
  private bono: number = 20000;
  constructor(nombre: string, salarioBase: number) {
    super(nombre, salarioBase);
  }

  calcularSalario(): number {
    return this.salarioBase + this.bono;
  }
}

class EmpleadoMedioTiempo extends Empleado {
  constructor(nombre: string, salarioBase: number) {
    super(nombre, salarioBase);
  }
  calcularSalario(): number {
    return this.salarioBase / 2;
  }
}

// Ejemplo de uso

const empleados: Empleado[] = [
  new EmpleadoTiempoCompleto("Juan Perez", 80000),
  new EmpleadoMedioTiempo("Ana Gomez", 60000),
  new EmpleadoTiempoCompleto("Luis Rodriguez", 90000),
  new EmpleadoMedioTiempo("Maria Fernandez", 70000),
];

empleados.forEach((empleado) => {
  console.log(
    `Empleado: ${empleado.getNombre()}, Salario: $${empleado.calcularSalario()}`
  );
});
