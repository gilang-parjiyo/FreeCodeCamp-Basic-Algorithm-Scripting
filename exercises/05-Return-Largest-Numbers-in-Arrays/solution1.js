function largestOfFour(arr) {
    return arr.map(item => {
        return item.reduce((acc, curr) => { return acc < curr ? curr : acc })
    })
}