function mutation(arr, i = 0) {
    let test = arr[0].toLowerCase();
    let target = arr[1].toLowerCase();
    return i >= target.length
        ? true : test.includes(target[i])
            ? mutation(arr, i + 1) : false;
}