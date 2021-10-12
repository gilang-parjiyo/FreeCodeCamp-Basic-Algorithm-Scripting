const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js',
    5: './solution4.js'
}

for (const path in testPath) {
    test('Function findElement must exist', () => {
        const findElement = rewire(testPath[path]).__get__('findElement');
        expect(findElement).not.toBe(undefined);
    })
    test('Function findElement must return right value', () => {
        const findElement = rewire(testPath[path]).__get__('findElement');
        expect(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })).toBe(8);
        expect(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; })).toBe(undefined);
    })

}