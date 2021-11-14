**Reverse a String**
***
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
***
**Hint 1**

We need to take the string and reverse it, so if it originally reads 'hello', it will now read 'olleh'. You can solve this challenge by creating a new string (initializing it to a blank string "") and then iterating the string starting from the last character through the first character and the concatenating each character to the new string. After iterating through all the characters in the string, you return the new string.
***
**Solution1**
summary : using unshift to add element.
```js
function reverseString(string) {
    let reverseString = [];
    for (let i = 0; i < string.length; i++) {
        reverseString.unshift(string[i]);
    }
    reverseString = reverseString.join('');
    return reverseString;
}
```
1. Create new empty array to store reversed string.
2. Loop trough string.
3. `Unshift()`(add first element to the beginning new string) string to the new string. The first element will be at the last index after loop done.
4. `Join()` element reverse string into one.
***
**Solution2**
summary : using string concatenation, create variable inside loop initialization, compound assignment, bracket notation;
```js
function reverseString(string) {
    let reverseString = '';
    for (let i = string.length -1; i >= 0; i--) {
        reverseString += string[i];
    }
    return reverseString;
}
```
1. Create variable reversed empty string.
2. Loop with decrement operator and terminator string length; 
3. Concate the last string to reversed empty string inside loop.
4. Return reversed string.
***
**Solution3**
Summary : using split, reverse, join method.
```js
function reverseString(string) {
    return string.split('').reverse().join('');
}
```
1. `split()` word into individual character.
2. `reverse()` to reverse individual character.
3. `join()` merge individual character into one word.

