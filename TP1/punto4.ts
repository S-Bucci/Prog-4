// denife la interfaz "Volador"
interface Volador {
    volar(): void;
}

// define la clase abstracta "Animal"
abstract class Animal {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract hacerSonido(): void;
}

// define la subclase "Pajaro" heredada de "Animal"
class Pajaro extends Animal implements Volador { // implements para implementar la interfaz "Volador"
    private especie: string;

    constructor(nombre: string, especie: string) {
        super(nombre);
        this.especie = especie;
    }

    // implementa el metodo abstracto de la clase "Animal"
    hacerSonido(): void {
        console.log("El pajaro hace ruido");
    }

    // implementa el metodo de la interfaz "Volador"
    volar(): void {
        console.log("El pajaro vuela");
    }
}

// define la subclase "Zorro" heredada de "Animal"
class Zorro extends Animal {
    private especie: string; // el atributo aparece privado de igual manera que en "Pajaro", porque aparece en el constructor pero no en los atributos de la clase "Zorro" en el diagrama UML

    constructor(nombre: string, especie: string) {
        super(nombre);
        this.especie = especie;
    }

    // implementa el metodo abstracto de la clase "Animal"
    hacerSonido(): void {
        console.log("El zorro hacer ruido");
    }
}