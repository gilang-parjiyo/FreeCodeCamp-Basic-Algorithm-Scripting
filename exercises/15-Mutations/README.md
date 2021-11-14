## Mutations

Return `true` if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return `true` because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return `false` because the string `hello` does not contain a `y`.

Lastly, `["Alien", "line"]`, should return `true` because all of the letters in `line` are present in `Alien`.

***
**Solution 1**
```js
function mutation(arr = []) {
    let source = Array.from(arr[0].toLowerCase());
    let target = Array.from(arr[1].toLowerCase());

    return target.every(item => source.includes(item));
}
```
**Code Explanation**
1. Split arr into two `source` and `target` then convert to array `Array.from()`.
2. `every()` check every item `source` `includes()` in `target`.

**Solution2**
```js
function mutation(arr) {
    let [source, target] = arr;
    for (let i = 0; i < target.length; i++) {
        if (source.toLowerCase()
            .indexOf(target.toLowerCase()[i]) < 0)
            return false;
    } return true
}
```
**Code Explanation**
1. Destruct assigment `source` and `target` 
2. Loop trough `target` 
3. Convert `source` to lowerCase, return `false` if `indexOf()` < 0.
4. If result `indexOf` all greater than 0 return true.
***
**Solution3**
```js
function mutation(arr, i = 0) {
    let test = arr[0].toLowerCase();
    let target = arr[1].toLowerCase();
    return i >= target.length
        ? true : test.includes(target[i])
            ? mutation(arr, i + 1) : false;
}
```
**Code Explanation**
1. add `iterator` in parameter
1. Split arr into two variable `test` and `target` and convert `toLowerCase()`.
2. create terminator if `iterator` greater than or equal  `arr.length` 
   - if true return `true`
   - if false run conditoinal `target` `includes()` in `test` or not.
   - if true recrussive function with adding parameter `iterator` with `1`.
   - if false return `false`
