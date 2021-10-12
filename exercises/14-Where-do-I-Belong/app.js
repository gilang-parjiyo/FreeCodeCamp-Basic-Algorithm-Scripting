function getIndexToIns(arr, num) {
    let arrSort = arr.sort((a, b) => a - b);
    for (let i = 0; i < arrSort.length; i++) {
        if (arrSort[i] >= num) return i;
    }
    return arrSort.length;
}