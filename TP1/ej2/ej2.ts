abstract class FiguraGeometrica {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  private radio: number;

  constructor(radio: number) {
    super("Círculo");
    this.radio = radio;
  }

  calcularArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

class Cuadrado extends FiguraGeometrica {
  private lado: number;
  constructor(lado: number) {
    super("Cuadrado");
    this.lado = lado;
  }
  calcularArea(): number {
    return Math.pow(this.lado, 2);
  }
}

class Triangulo extends FiguraGeometrica {
  private base: number;
  private altura: number;
  constructor(base: number, altura: number) {
    super("Triángulo");
    this.base = base;
    this.altura = altura;
  }
  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}
