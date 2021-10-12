function truncateString(string, num) {
    if (num < string.length) return string.slice(0, num) + '....';
    else return string;
}