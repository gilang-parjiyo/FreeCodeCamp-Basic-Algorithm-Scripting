function largestOfFour(arr) {
    let allArr = Array.from(...arguments);
    let newArr = [];
    for (const arr in allArr) {
        let maxArr = allArr[arr].reduce((a, b) => {
            a = Math.max(a, b);
            return a;
        })
        newArr.push(maxArr)
    }
    return newArr;
}