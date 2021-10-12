function findLongestWordLength(sentence) {
    let words = sentence.split(' ');
    if (words.length === 1) {
        return words[0].length;
    }
    return Math.max(words[0].length, findLongestWordLength(words.slice(1).join(' ')));

}