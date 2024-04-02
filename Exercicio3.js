"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var CalculadoraDeArea = /** @class */ (function () {
    function CalculadoraDeArea() {
    }
    CalculadoraDeArea.prototype.calcularArea = function (forma) {
        switch (forma) {
            case "círculo":
                var raio = parseFloat(readline.question("Insira o raio do círculo: ") || "0");
                return Math.PI * Math.pow(raio, 2);
            case "triângulo":
                var base = parseFloat(readline.question("Insira a base do triângulo: ") || "0");
                var altura = parseFloat(readline.question("Insira a altura do triângulo: ") || "0");
                return 0.5 * base * altura;
            case "quadrado":
                var lado = parseFloat(readline.question("Insira o lado do quadrado: ") || "0");
                return Math.pow(lado, 2);
            default:
                return "Forma geométrica inválida!";
        }
    };
    return CalculadoraDeArea;
}());
var calculadora = new CalculadoraDeArea();
var forma = readline.question("Escolha a forma geométrica (círculo, triângulo, quadrado): ");
console.log("A área é:", calculadora.calcularArea(forma));
