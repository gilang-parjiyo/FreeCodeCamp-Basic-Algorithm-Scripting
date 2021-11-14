**Boo who**

Check if a value is classified as a boolean primitive. Return `true` or `false`.

Boolean primitives are `true` and `false`.

***
**Solution**
```js
function booWho(bool) {
    return typeof bool === 'boolean';
}
```
**Code Explanation**
1. Will return true fi type `bool` is `boolean`.