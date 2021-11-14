**Confirm the Ending**

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge *can* be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
***
**Solution1**
```js
function repeatStringNumTimes(string, times) {
    let repeat = '';
    for (let i = 0; i < times; i++) {
        repeat += string;
    }
    return repeat;
}
```
**Code Explanation**
1. Create variable `repeat` to hold value repeated string.
2. Create for loop according to `times`.
3. Compound assigment addition `string` to `repeat` variable.
4. Return `repeat`.

***
**Solution2**
```js
function repeatStringNumTimes(string, times) {
    let stringTimes = '';

    while (times > 0) {
        stringTimes += string;
        times--;
    }
    return stringTimes;
}
```
1. Create variable `stringTimes` to hold value repeated string.
2. Create while loop `times` greater than 0
3. Compound assigment addition `string` to `stringTimes` variable.
4. Decrease `times` using decrement operator.

***
**Solution3**
```js
function repeatStringNumTimes(string, times) {
    return times > 0 ? string + repeatStringNumTimes(string, times -1) : '';
}
```
1. Create terminator `times` > 0 run recrussive.
2. Recrussive run function with parameter `string` but `times - 1` and concate with `string`.
3. If terminator false return `''`.
