import * as readline from 'readline-sync'
class CalculadoraDeArea {
    calcularArea(forma: string): number | string {
        switch (forma) {
            case "círculo":
                const raio: number = parseFloat(readline.question("Insira o raio do círculo: ") || "0");
                return Math.PI * Math.pow(raio, 2);
            case "triângulo":
                const base: number = parseFloat(readline.question("Insira a base do triângulo: ") || "0");
                const altura: number = parseFloat(readline.question("Insira a altura do triângulo: ") || "0");
                return 0.5 * base * altura;
            case "quadrado":
                const lado: number = parseFloat(readline.question("Insira o lado do quadrado: ") || "0");
                return Math.pow(lado, 2);
            default:
                return "Forma geométrica inválida!";
        }
    }
}


const calculadora = new CalculadoraDeArea();
const forma = readline.question("Escolha a forma geométrica (círculo, triângulo, quadrado): ");
console.log("A área é:", calculadora.calcularArea(forma));