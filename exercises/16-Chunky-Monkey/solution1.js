function chunkArrayInGroups(arr, num) {
    if (arr.length <= num) {
        return [arr]
    } return [arr.slice(0, num)].concat( chunkArrayInGroups(arr.slice(num), num))
}