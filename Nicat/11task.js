function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function edelerinyoxlansi(n) {
    for (let i = n; i >= 2; i--) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

const n = parseInt(prompt("ədəd daxil edin:"));
    console.log(`0-dan ${n}-ə olan sadə ədədlər: `);
    edelerinyoxlansi(n);