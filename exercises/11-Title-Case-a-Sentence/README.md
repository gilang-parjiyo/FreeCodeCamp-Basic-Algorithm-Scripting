**Title Case a Sentence**

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like `the` and `of`.

***
**Solution1**
```js
function titleCase(str = '') {
    return str.toLowerCase().split(' ')
        .map(item => item.replace(item[0], item[0].toUpperCase()))
        .join(' ')
}
```
**Code Explanation**
1. Set string `toLowerCase()`.
2. Split string into individual words `split()`.
3. Map item
   - replace firest character `item[0]`, `toUpperCase()`
4. `join()` words with delimeter `' '`.
***
**Solution2**
 ```js
 function titleCase(str) {
    return str.toLowerCase()
        .replace(/(^|\s)\S/g, first => first.toUpperCase())
}
```
**Code Explanation**
1. Set string `toLowerCase()`.
2. Replace string pattern
   `(^|\s)\S` `^`Beginning of string or`|` whitespcae`\s` then followed non `\S`whitespace. 
3. Then convert the matches character `toUpperCase()`.
***
**Solution3**
```js
function titleCase(str) {
    return str.split(' ')
        .map(item => {
            return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        }).join(' ')
}
```
**Code Explanation**
1. `split()` string into individual words.
2. `map()` words and 
   - Convert first character in item to uppercase `item.charAt(0).toUpperCase()`
   - Concatenate with caracter after first character and convert to lower case `item.slice(1).toLowerCase`
   - Join words into sentence.
   


