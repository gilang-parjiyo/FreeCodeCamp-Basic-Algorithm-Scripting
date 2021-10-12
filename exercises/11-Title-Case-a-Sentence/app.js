function titleCase(str = '') {
    return str.toLowerCase().split(' ')
        .map(item => item.replace(item[0], item[0].toUpperCase()))
        .join(' ')
}