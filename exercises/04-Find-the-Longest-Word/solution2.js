function findLongestWordLength(sentence) {
    return Math.max(...sentence.split(' ').map(item => item.length));
}