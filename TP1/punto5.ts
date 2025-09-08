// Interface Eléctrico
interface Electrico {
    enchufar(): void;
}

// Clase base Vehiculo
abstract class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected ruedas: number;

    constructor(marca: string, modelo: string, año: number, ruedas: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.ruedas = ruedas;
    }

    frenar(): void {
        // Implementación de frenado
    }

    acelerar(): void {
        // Implementación de aceleración
    }
}

// Clase Auto
class Auto extends Vehiculo implements Electrico {
    puertas: number;

    constructor(marca: string, modelo: string, año: number, ruedas: number, puertas: number) {
        super(marca, modelo, año, ruedas);
        this.puertas = puertas;
    }

    cargarEquipaje(): void {
        // Implementación de carga de equipaje
    }

    enchufar(): void {
        // Implementación de enchufar
    }
}

// Clase Moto
class Moto extends Vehiculo {
    private deportiva: boolean;
    private chopera: boolean;

    constructor(
        marca: string,
        modelo: string,
        año: number,
        ruedas: number,
        deportiva: boolean,
        chopera: boolean
    ) {
        super(marca, modelo, año, ruedas);
        this.deportiva = deportiva;
        this.chopera = chopera;
    }

    ponerPataApoyo(): void {
        // Implementación de poner pata de apoyo
    }
}