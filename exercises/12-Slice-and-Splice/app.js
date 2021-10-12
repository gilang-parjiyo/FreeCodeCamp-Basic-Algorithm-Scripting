function frankenSplice(arr1, arr2 = [], num) {
    let newArr = [...arr2]
    newArr.splice(num, 0, ...arr1);
    return newArr;
}