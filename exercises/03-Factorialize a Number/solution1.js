function factorialize(num) {
    let factorialize = 1;
    let i = num;
    while (i !== 0) {
        factorialize *= i;
        i--;
    }
    return factorialize;
}