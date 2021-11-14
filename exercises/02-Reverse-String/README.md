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
**Code Explanation**
1. Create new empty array to store reversed string.
2. Loop trough string.
3. `Unshift()`(add first element to the beginning new string) string to the new string. The first element will be at the last index after loop done.
4. `Join()` element reverse string into one.

**Other Explanation**
-   Starting at the last character of the string passed to the function, you build a new string `reversedStr` from `str`.
-   During each iteration of the `for` loop, `reversedStr` gets concatenated with itself and the current character.
-   Finally, you return the final value of `reversedStr`.

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

**Other Explanation**
-   Our goal is to take the input, `str`, and return it in reverse. Our first step is to split the string by characters using `split('')`. Notice that we don't leave anything in between the single quotes, this tells the function to split the string by each character.
-   Using the `split()` function will turn our string into an array of characters, keep that in mind as we move forward.
-   Next we *chain* the `reverse()` function, which takes our array of characters and reverses them.
-   Finally, we *chain* `join('')` to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

