
function isPrime(n) {
    // var n = 71
    for (var i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false
        }
        // console.log(i)
    }
    return true
}