**Finders Keepers**

Create a function that looks through an array `arr` and returns the first element in it that passes a 'truth test'. This means that given an element `x`, the 'truth test' is passed if `func(x)` is `true`. If no element passes the test, return `undefined`.

***
**Solution1**
```js
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i];
    }
}
```
**Code Explanation**
1. for loop trough `arr` item.
2. Condition pass `arr` item in to `func`, if true return `arr` item.
***
```js
function findElement(arr, func) {
  return (arr.length > 0 && !func(arr[0]))
    ? findElement(arr.slice(1), func)
    : arr[0] 
}
```
1. Create recrussive terminator 
   - Condition if `arr.length` > 0 after `slice()` and pass current first item to `func`and false.
      - return recrussive findElement with remove argument `arr` first item with `slice()` and `func` still the same.
      - else return `current first item`
***
**Solution2**
```js
function findElement(arr, func) {
    return arr.find(func)
}
```
1. Using `arr.find` and pass `func` ass callback function this will return first item that return true.
***
**Solution3**
```js
function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)]
}
```
1. Map `map()` arr item then pass `func` as callback function.
2. Then find index of first true value with `indexOf`.
3. Wrap index and pass it to bracket notation `arr["result map indexOf"]`
   
