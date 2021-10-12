function repeatStringNumTimes(string, times) {
    let repeat = '';
    for (let i = 0; i < times; i++) {
        repeat += string;
    }
    return repeat;
}