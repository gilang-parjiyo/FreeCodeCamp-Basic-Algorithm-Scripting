function repeatStringNumTimes(string, num) {
    if (num < 1) return '';
    else return string + repeatStringNumTimes(string, num - 1)
}