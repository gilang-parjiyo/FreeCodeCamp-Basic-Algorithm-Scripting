function largestOfFour(arr) {
    let arrMax = [];
    for (let i in arr) {
        arrMax.push(Math.max(...arr[i]))
    }
    return arrMax;
}
