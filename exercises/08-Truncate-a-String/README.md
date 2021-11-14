**Truncate a String**

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

***
**Solution1**
```js
function truncateString(string, num) {
    return num >= string.length ? string : string.slice(0, num) + '....';
}
```
**Code Explanation**
1. Condition if `num` greater or equal `string.length` 
   - true : return `string`.
   - false : `slice()` string from `first` index until `num` concate with elipsis `...`
***
**Solution2**
```js
function truncateString(string, num) {
    if (num < string.length) return string.slice(0, num) + '....';
    else return string;
}
```
**Code Explanation**
1. Condition `num` < `string.length`;
   - return `slice()` string from beginning to index `num` then concate with `...`.
   - else return `string`.

