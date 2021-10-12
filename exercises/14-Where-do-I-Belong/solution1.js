function getIndexToIns(arr, num) {
    return arr.filter(item => item < num).length;
}