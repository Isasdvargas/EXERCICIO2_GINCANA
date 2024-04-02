let leitor = require('readline-sync');
import {quadrado} from './mainFormas';
import {circulo} from './mainFormas';
import {triangulo} from './mainFormas';

let opcao = 0;

while(opcao != 4){
    opcao = leitor.question('Qual area voce gostaria de calcular?'/n,'1)Quadrado'/n,'2)Triangulo'/n,'3)Circulo'/n)

    switch(opcao){
        case 1:
            
            let alturaQ = leitor.question('Qual a altura do quadrado?'/n)
            let larguraQ = leitor.question('Qual a largura do quadrado?'/n)
            let areaQ = new quadrado(alturaQ, larguraQ)
stop;
        case 2:
            
        let alturaT = leitor.question('Qual a altura do triangulo?'/n)
         let baseT = leitor.question('Qual a base do triangulo?'/n)
        let areaT = new circulo(alturaT, baseT)
    stop;

    case 3:
            
            let raio = leitor.question('Qual o raio do circulo?'/n)
            
            let areaC = new triangulo(raio)
    }
}