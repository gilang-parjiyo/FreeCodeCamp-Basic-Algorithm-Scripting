function bouncer(arr) {
    let trueValue = [];
    for (let i = 0; i < arr.length; i++) {
            if(arr[i]) trueValue.push(arr[i]);
    }
    return trueValue;
}