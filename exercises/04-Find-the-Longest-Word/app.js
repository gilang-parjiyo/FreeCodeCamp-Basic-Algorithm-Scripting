function findLongestWordLength(string) {
    return string.split(' ').reduce((a, b) => {
        if (a.length < b.length) a = b;
        return a;
    }, ' ').length
}