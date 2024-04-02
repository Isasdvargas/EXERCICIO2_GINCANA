function isPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log("Números primos de 1 a 100:")
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}