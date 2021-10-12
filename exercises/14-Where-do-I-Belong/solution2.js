function getIndexToIns(arr = [], num) {
    let arrSort = arr.sort((a, b) => a - b)
        .findIndex(curr => curr >= num)
        return arrSort < 0 ? arr.length : arrSort;
}