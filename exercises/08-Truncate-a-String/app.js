function truncateString(string, max) {
    return max >= string.length ? string : string.slice(0, max) + '....';
}