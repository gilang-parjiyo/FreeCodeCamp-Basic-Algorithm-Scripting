**Factorialize a Number**

Return the factorial of the provided integer.

If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.
***
**Solution1**
summary conditional, array.from create array from number, reduce() dengan function a*b;
```js
function factorialize(num) {
    if (num <= 0) return 1;
    else {
        let arrNum = Array.from({ length: num }, (_, i) => i + 1);
        let factorialize = arrNum.reduce((a, b) => a * b);
        return factorialize;
    }
}

factorialize(5)
```
**Code Explanation**
1. conditional if number <0 return 1;
2. else 
   1. Create arrNum using `Array.from()` using args as `length` and callback function with empty element but with index.
   2. `Reduce()` array using callback function `a * b`;
   3. return factorialize.
***
**Solution2**
Summary : while loop, compound assignment multiply;
```js
function factorialize(num) {
    let factorialize = 1;
    let i = num;
    while (i !== 0) {
        factorialize *= i;
        i--;
    }
    return factorialize;
}
```
**Code Explanation**

1. create `var factorialize = 1` to hold factorialize value,
2. create iterator i = args.
3. `while loop` iterator > 0;
4. multiply itearator to find factorialize.
***
**Solution3**
Summary : loop, decrement;
```js
function factorialize(num) {
    for (var product = 1; num > 0; num--) {
        product *= num;
    } 
    return product;
}
```
**Code Explanation**
1. Create var iterator inside loop, terminator args > 0; decrement args.
2. Multiply assigment operator to find value factoriliaze.
3. return iterator;
***
**Solution3**
summary : recrussive args multiply call function again with args-1;
```js
function factorialize(num) {
    if (num === 0) return 1;
    else return num * factorialize(num - 1)
}
```
**Code Explanation**
1. terminator `if args === 0` return 1.
2. recrussive args multiply function with args -1 
***
**Solution4**
Summary: recrussive with add new parameter factorilze with value 1;
```js
function factorialize(num, factorial = 1) {
    if (num === 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}
```
**Code Explanation**
1. Tdd new parameter to hold factorialize value;
2. Terminator if num = 0;
3. recrussive with decrement args number and multiply factorialize with args number;