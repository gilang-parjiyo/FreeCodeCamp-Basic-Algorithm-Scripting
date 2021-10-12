function mutation(arr = []) {
    let arr1 = Array.from(arr[0].toLowerCase());
    let arr2 = Array.from(arr[1].toLowerCase());

    return arr2.every(item => arr1.includes(item));
}