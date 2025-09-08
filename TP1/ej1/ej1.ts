export interface Animal {
    hacerSonido(): void;
    moverse(): void;
}

class Perro implements Animal {
    
    hacerSonido(): void {
        console.log("Guau!");
    }
    moverse(): void {
        console.log("El perro corre.");
    }

}

// Ejemplo de uso
const miPerro = new Perro();
miPerro.hacerSonido(); 
miPerro.moverse(); 