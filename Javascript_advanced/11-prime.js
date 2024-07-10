function countPrimeNumbers() {
    let countr = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
            }
        }
        if (prime)
            countr += 1;
    }
    return countr;
}

const test1 = performance.now();
setTimeout(() => { for (let i = 0; i<= 100; i++) countPrimeNumbers();});
const test2 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${test2 - test1} milliseconds.`);