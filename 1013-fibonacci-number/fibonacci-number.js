/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const f = [0,1];
    for(let i = 2;i<=n;i++){
        f.push(f[i-1]+f[i-2]);
    }
    console.log(f)
    return f[n];
};