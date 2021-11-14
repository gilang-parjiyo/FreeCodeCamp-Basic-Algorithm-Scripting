**Falsy Bouncer**

Remove all falsy values from an array.
Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.
Hint: Try converting each value to a Boolean.

***
**Solution1**
```js
function bouncer(arr) {
  return arr.filter(item => (item))
}

```
**Code Explanation**
1. Using `filter()` with callback function (item) that true.
***
**Solution2**
```js
function bouncer(arr) {
    return arr.filter(Boolean);
}
```
**Code Explanation**
1. Filter array `filter()` that boolean.
***
**Solution3**
```js
 function bouncer(arr) {
    let trueValue = [];
    for (let i = 0; i < arr.length; i++) {
            if(arr[i]) trueValue.push(arr[i]);
    }
    return trueValue;
}
```
**Code Explanation**
1. Create variable to hold `trueValue`
2. Loop trough array 
   - if `truthy` `push()` current value to `trueValue` 
3. Return `trueValue`


