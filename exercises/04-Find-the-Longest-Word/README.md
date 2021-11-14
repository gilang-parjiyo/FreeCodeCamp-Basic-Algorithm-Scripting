## Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.
***
**Solution1**
Summary : split() string into array of word > reduce array with callback function compare accumulator with current, if accumulator less than current set current as accumulator.
```js
function findLongestWordLength(string) {
    return string.split(' ').reduce((a, b) => {
        if (a.length < b.length) a = b;
        return a;
    }, ' ').length
}
```
**Code Explanation**
1. `split()` string into word.
2. `reduce()` array of charcter with callback function :
   - compare acuumulator and current;
   - if current greater than accumulator set current as accumulator.
   - return accumulator with method length;
***
**Solution2**
Summary : split() into individual word, create variable to hold max value, loop increment, with condition compare current word length with max length if current word length is greater set current word as max length.
```js
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
```
**Code Explanation**
1. `Split()` sentence into array individual word
2. Declare var to hold value maxLength;
3. Loop trough word array
4. Compare current word `length` with maxLength;
   - If current word greater than maxLength set current word as maxLength;
5. Return maxLength;
***
**Solution3**
Summary : `split()` sentence into individual word than `map()` with callback function item.length > spread map array > find largests value with `Math.max()`.
```js
function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(item => item.length))
}
```
**Code Explanation**
1. Using `Math.max()` to find largest value of list of number
   1. Using `split()` to split string into individual word.
   2. Using `map()` remap array individual word with callback function get length of individual word.
   3. Using `...` spread operator to spread value array after get length of individual word so the method `Math.max()` can get greatest value.
***
**Solution4**
```js
function findLongestWordLength(sentence) {
    let words = sentence.split(' ');
    if (words.length === 1) {
        return words[0].length;
    }
    return Math.max(words[0].length, findLongestWordLength(words.slice(1).join(' ')));

}
```
**Code Explanation**
1. Using `split()` to split string into individual word.
2. Create terminator if only one word left return current first word length;
3. Recurssive 
   1. Get first word of arr of word
   2. Call function without first word with `slice()` arrWord dont forget to `join()` the word after slice.
   3. After terminator reached using `Math.max()` to find greatest length of list length of first word.
***