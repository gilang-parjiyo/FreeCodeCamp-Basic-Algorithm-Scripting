function truncateString(string, num) {
    return num >= string.length ? string : string.slice(0, num) + '....';
}