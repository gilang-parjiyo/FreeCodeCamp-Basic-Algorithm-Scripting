function findElement(arr, func) {
   let i = 0
    while (i < arr.length) {
       if(func(arr[i])) return arr[i]
       i++
   }
}