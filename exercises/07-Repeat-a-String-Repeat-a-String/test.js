const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js'
}

for (const path in testPath) {
    test('Function repeatStringNumTimes must be exist', () => {
        const repeatStringNumTimes = rewire(testPath[path]).__get__('repeatStringNumTimes');
        expect(repeatStringNumTimes).not.toBe(undefined);
    })
    test('Function repeatStringNumTimes should return string', () => {
        const repeatStringNumTimes = rewire(testPath[path]).__get__('repeatStringNumTimes');
        expect(typeof repeatStringNumTimes('*', 2)).toBe('string');
    })
    test('Function repeatStringNumTimes should return righ value', () => {
        const repeatStringNumTimes = rewire(testPath[path]).__get__('repeatStringNumTimes');
        expect(repeatStringNumTimes('*', 3)).toBe('***');
        expect(repeatStringNumTimes('abc', 3)).toBe('abcabcabc');
        expect(repeatStringNumTimes('abc', 4)).toBe('abcabcabcabc');
        expect(repeatStringNumTimes('abc', 1)).toBe('abc');
        expect(repeatStringNumTimes('*', 8)).toBe('********');
        expect(repeatStringNumTimes('abc', -2)).toBe('');
        expect(repeatStringNumTimes('abc', 0)).toBe('');
        expect(repeatStringNumTimes('*', 3)).toBe('***');
    })


}