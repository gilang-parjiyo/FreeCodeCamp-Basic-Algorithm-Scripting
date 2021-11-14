## Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).
***
**Solution1**
```js
function getIndexToIns(arr, num) {
    let arrSort = arr.sort((a, b) => a - b);
    for (let i = 0; i < arrSort.length; i++) {
        if (arrSort[i] >= num) return i;
    }
    return arrSort.length;
}
```
**Code Explanation**
1. Sort array with `sort()`
2. For loop increment array that sorted.
3. Condition if array sort item greter or equal than `num` return `index`.
4. If no array item greater or equal `num` return `arrSort.lenght`
***
**Solution2**
```js
function getIndexToIns(arr, num) {
    return arr.filter(item => item < num).length;
}
```
**Code Explanation**
1. `filter()` array item that less than `num`
2. Get the length item that less than `num` using `.length`, the length of item same as index we looking for.
***
**Solution3**
```js
function getIndexToIns(arr = [], num) {
    let arrSort = arr.sort((a, b) => a - b)
        .findIndex(curr => curr >= num)
        return arrSort < 0 ? arr.length : arrSort;
}
```
**Code Explanation**
1. `sort()` array.
2. `findIndex()` with callback function compare item greater or equal num.
3. `ternary` if result `findIndex()` less than 0 return `arr.length`, if false return result `findIndex()`
***
**Solution4**
```js
function getIndexToIns(arr = [], num) {
    return arr.concat(num)
        .sort((a, b) => a - b)
        .indexOf(num)
}
```
**Code Explanation**
1. `concat()` num with array.
2. `sort()` array.
3. `indexOf()` find index of num.


