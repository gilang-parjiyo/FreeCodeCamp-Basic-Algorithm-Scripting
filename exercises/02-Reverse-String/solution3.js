function reverseString(str) {
    let reverse = [];
    let strLen = str.length - 1;
    for (let i = strLen; i >= 0; i--) {
      reverse.push(str[i])
    }
    return reverse.join('');
  }
  
reverseString("hello");