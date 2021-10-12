function titleCase(str) {
    return str.toLowerCase()
        .replace(/(^|\s)\S/g, first => first.toUpperCase())
}