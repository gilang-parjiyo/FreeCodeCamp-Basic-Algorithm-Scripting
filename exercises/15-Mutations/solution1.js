function mutation(arr) {
    let [arr1, arr2] = arr;
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.toLowerCase()
            .indexOf(arr2.toLowerCase()[i]) < 0)
            return false;
    } return true
}