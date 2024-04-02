export class quadrado{
constructor(altura, largura){
    this.altura = altura;
    this.largura = largura;
    this.area = this.largura * this.altura;
    return this.area;
}
}

export class triangulo{
    constructor(base, altura){
        this.altura = altura;
        this.base = base;
        this.area = (this.base * this.altura) / 2;
        return this.area;
    }
    }

export class circulo{
        constructor(raio){
            this.raio = raio;
            this.area = 3.14 * (this.raio * this.raio);
            return this.area;
        }
        }