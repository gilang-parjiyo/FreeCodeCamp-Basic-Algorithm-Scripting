function confirmEnding(string, target) {
    return string.slice(string.length - target.length) === target;
}