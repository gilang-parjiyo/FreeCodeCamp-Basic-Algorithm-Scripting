**Confirm the Ending**

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge *can* be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
***
**Solution1**
```js
function confirmEnding(str = '', target) {
    return str.substring(str.length - target.length) === target;
}
```
**Code Explanation**
1. get `substring()` starting from the index of item;
2. get index item length item - target length.
3. compare value substring with value target.
***
**Solution2**
```js
function confirmEnding(str = '', target) {
    return str.slice(str.length - target.length) === target;
}
```
**Code Explanation**
1. `slice()` item starting from the index of item;
2. Get index item using `length item - target length`.
3. compare value end string with value target.
***
**Solution3**
```js
function confirmEnding(string, target) {
    const re = new RegExp(target + "$", 'i');

    return re.test(string);
}
```
**Code Explanation**
1. Create dynamic regex pettern using RegExp `target` + `$`(mathces the end of string) + `i` ignore case sensitive.
2. Using `regex.test(string)` to check if the end string matches the patatern. 
