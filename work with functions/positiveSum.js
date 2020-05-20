function positiveSum(args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] > 0) {
            sum += args[i];
        }
    }
    return sum;
}

console.log(positiveSum([2, -3, 5]));