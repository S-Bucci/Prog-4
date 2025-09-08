var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salarioBase) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }
    Empleado.prototype.getNombre = function () {
        return this.nombre;
    };
    return Empleado;
}());
var EmpleadoTiempoCompleto = /** @class */ (function (_super) {
    __extends(EmpleadoTiempoCompleto, _super);
    function EmpleadoTiempoCompleto(nombre, salarioBase) {
        var _this = _super.call(this, nombre, salarioBase) || this;
        _this.bono = 20000;
        return _this;
    }
    EmpleadoTiempoCompleto.prototype.calcularSalario = function () {
        return this.salarioBase + this.bono;
    };
    return EmpleadoTiempoCompleto;
}(Empleado));
var EmpleadoMedioTiempo = /** @class */ (function (_super) {
    __extends(EmpleadoMedioTiempo, _super);
    function EmpleadoMedioTiempo(nombre, salarioBase) {
        return _super.call(this, nombre, salarioBase) || this;
    }
    EmpleadoMedioTiempo.prototype.calcularSalario = function () {
        return this.salarioBase / 2;
    };
    return EmpleadoMedioTiempo;
}(Empleado));
// Ejemplo de uso
var empleados = [
    new EmpleadoTiempoCompleto("Juan Perez", 80000),
    new EmpleadoMedioTiempo("Ana Gomez", 60000),
    new EmpleadoTiempoCompleto("Luis Rodriguez", 90000),
    new EmpleadoMedioTiempo("Maria Fernandez", 70000),
];
empleados.forEach(function (empleado) {
    console.log("Empleado: ".concat(empleado.getNombre(), ", Salario: $").concat(empleado.calcularSalario()));
});
