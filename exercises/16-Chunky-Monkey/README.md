**Chunky Monkey**

Write a function that splits an array (first argument) into groups the length of `size` (second argument) and returns them as a two-dimensional array.
***
**Solution1**
```js
function chunkArrayInGroups(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += num) {
        newArr.push(arr.slice(i, i + num))
    }
    return newArr;
}
```
**Code Explanation**
1. Create variable `newArr` tho hold value group of array.
2. `for loop` to loop torugh array with increment argument `num`;
3. `push()` array `slice()` from beginning to argument `num` + `index`
4. return `newArr`.
***
**Solution2**
```js
function chunkArrayInGroups(arr, num) {
    if (arr.length <= num) {
        return [arr]
    } return [arr.slice(0, num)].concat( chunkArrayInGroups(arr.slice(num), num))
}
```
**Code Explanation**
1. Terminator `arr.length <= num` return array  wrap up in bracket`[arr]`.
2. `slice()` array until `num`
3. Then concat `slice()` result `concat()` with runction recurssive.
4. Recrussive with parameter array `slice()` until `num`, and parameter `num`.
***
**Solution3**
```js
function chunkArrayInGroups(arr, size) {
    let newArr=[];
    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}
```
**Code Explanation**
1. Create new variable an empty array `newArr`.
2. `While` array still have length with `arr.length`.
3. `push()` `splice()` array from `first` to `size` to `newArr`.
4. return `newArr`
***


