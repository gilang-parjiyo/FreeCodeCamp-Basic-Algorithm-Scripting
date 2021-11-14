function titleCase(str) {
    return str.split(' ')
        .map(item => {
            return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        }).join(' ')
}