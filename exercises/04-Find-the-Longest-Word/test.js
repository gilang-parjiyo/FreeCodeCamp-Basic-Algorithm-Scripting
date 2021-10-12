const rewire = require('rewire');
const testPath = {
    // 1: './app.js',
    // 2: './solution1.js',
    // 3: './solution2.js',
    4: './solution3.js'
}

for (const path in testPath) {
    test('Function findLongestWordLength must be exist', () => {
        const findLongestWordLength = rewire('./app.js').__get__('findLongestWordLength');
        expect(findLongestWordLength).not.toBe(undefined);
    })
    test('Given sentence to findLongestWordLength should return a number.', () => {
        const findLongestWordLength = rewire('./app.js').__get__('findLongestWordLength');
        expect(typeof findLongestWordLength('makan')).toBe('number')
    })
    test('Given sentence to findLongestWordLength should return longest Word Length', () => {
        const findLongestWordLength = rewire('./app.js').__get__('findLongestWordLength');
        expect(findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(6);
        expect(findLongestWordLength('May the force be with you')).toBe(5);
        expect(findLongestWordLength('Google do a barrel roll')).toBe(6);
        expect(findLongestWordLength('What is the average airspeed velocity of an unladen swallow')).toBe(8);
        expect(findLongestWordLength('What if we try a super-long word such as otorhinolaryngology')).toBe(19);
    })

}