let soma = 0

for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
        soma += num
    }
}

console.log("A soma de todos os números pares de 1 a 50 é:", soma)