function confirmEnding(string, target) {
    const re = new RegExp(target + "$", 'i');

    return re.test(string);
}