function reverseString(str) {
    for (let reverse = [], i = 0; i < str.length; i++) {
      reverse.unshift(str[i]);
    }
    return reverse.join('')
  }
  
  console.log(reverseString("hello"));