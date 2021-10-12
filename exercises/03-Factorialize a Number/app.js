function factorialize(num) {
    if (num <= 0) return 1;
    else {
        let arrNum = Array.from({ length: num }, (_, i) => i + 1);
        let factorialize = arrNum.reduce((a, b) => a * b);
        return factorialize;
    }
}

factorialize(5)