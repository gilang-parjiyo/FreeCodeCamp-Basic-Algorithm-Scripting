## Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

***
**Solutoin1**
Summary : using reduce to compare each item in array to find largest value.
```js
function largestOfFour(arr) {
    let newArr = [];
    for (const i in arr) {
        let maxArr = arr[i].reduce((accumulator, current) => {
            if(accumulator < current) accumulator = current;
            return accumulator;
        })
        newArr.push(maxArr)
    }
    return newArr;
}
```
**Code Explanation**
1. Create var array to hold value largest number of each provided array.
2. Use `for in` loop to loop trough `arr` item.
3. using `reduce()` method to compare `accumulator` with `current` item if current greater set `current` as `accumulator` then return `accumulator` and store as value `maxArr`.
4. using `push()` method to store `maxArr` to `newArr`.
5. Return `newArr` that contain the largest number of each array;
***
**Solution2**
Summary : map each array then reduce using callback function compare accumulator with current using ternary
```js
function largestOfFour(arr) {
    return arr.map(item => {
        return item.reduce((acc, curr) => { return acc < curr ? curr : acc })
    })
}
```
**Code Explanation**
1. Using `map()` to map array item.
2. Compare each element in item using `reduce()`.
   - Callback function compare using ternary operator `accumulator` with `current` return the `largest value`.
***
**Solution3**
```js
function largestOfFour(arr) {
    return arr.map(item => Math.max(...item))
}
```
**Code Explanation**
1. Using `map()` to map every item array.
   - Callback function `spread(...)` array item so it can be process by method `Math.max`
   - Using `Math.max()` find greatest value of array item.
***
**Solution4**
Summary : add new parameter empty array, create terminator if arr length false return finalArr, recrussive slice first array item, concat final array with greatest value first item of array. 
```js
function largestOfFour(arr, finalArr = []) {
    return arr.length = 0
        ? finalArr
        : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}
```
**Code Explanation**
1. Create new paremater `finalArr` empty array to hold value largest item.
2. Create terminator if `arr` length < 0
   - if true : return `finalArr`.
   - if length true : recrussive function with `slice()` first item array.
     - Find largest first item array using `Math.max` don't forget spread `...` so `Math.max()` can process the item.
     - `concat()` the largest item to `finalArr`

