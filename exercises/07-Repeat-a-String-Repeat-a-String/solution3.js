function repeatStringNumTimes(string, times) {
    return times > 0 ? string + repeatStringNumTimes(string, times -1) : '';
}