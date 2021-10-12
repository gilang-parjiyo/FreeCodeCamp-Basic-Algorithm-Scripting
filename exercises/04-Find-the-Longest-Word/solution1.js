function findLongestWordLength(sentence) {
    let arrWords = sentence.split(' ');
    let maxLength = 0;
    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i].length > maxLength) {
            maxLength = arrWords[i].length;
        }
    }
    return maxLength;
}