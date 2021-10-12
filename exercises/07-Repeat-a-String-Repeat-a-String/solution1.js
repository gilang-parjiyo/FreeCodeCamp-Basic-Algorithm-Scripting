function repeatStringNumTimes(string, times) {
    let stringTimes = '';

    while (times > 0) {
        stringTimes += string;
        times--;
    }
    return stringTimes;
}