function largestOfFour(arr) {
    let newArr = [];
    for (const i in arr) {
        let maxArr = arr[i].reduce((a, b) => {
            if(a < b) a = b;
            return a;
        })
        newArr.push(maxArr)
    }
    return newArr;
}