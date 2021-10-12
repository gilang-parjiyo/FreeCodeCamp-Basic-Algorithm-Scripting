function reverseString(string) {
    let reverseString = [];
    for (let i = 0; i < string.length; i++) {
        reverseString.unshift(string[i]);
    }
    reverseString = reverseString.join('');
    return reverseString;
}