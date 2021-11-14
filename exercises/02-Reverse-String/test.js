const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js'
}

for (const prop in testPath) {

    test('Function reverseString must exist', () => {
        const reverseString = rewire(testPath[prop]).__get__('reverseString');
        expect(reverseString).not.toBe(undefined);
    })

    test('Function reverseString must return string', () => {
        const reverseString = rewire(testPath[prop]).__get__('reverseString');
        expect(typeof reverseString('hello')).toBe('string');
    })

    test('Given string to function reverseString must reversed', () => {
        const reverseString = rewire(testPath[prop]).__get__('reverseString');
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString('Howdy')).toBe('ydwoH');
        expect(reverseString('Greeting from Earth')).toBe('htraE morf gniteerG');
    })

}