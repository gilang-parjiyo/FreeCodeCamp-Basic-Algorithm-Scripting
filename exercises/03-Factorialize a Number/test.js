const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js',
    5: './solution4.js'
}

for (const path in testPath) {
    test('Function factorialize must exist', () => {
        const factorialize = rewire(testPath[path]).__get__('factorialize');
        expect(factorialize).not.toBe(undefined);
    })
    test('Function factorialize should return a number', () => {
        const factorialize = rewire(testPath[path]).__get__('factorialize');
        expect(typeof factorialize(5)).toBe('number');
    })
    test('Given value > 0 to factorialize should return ', () => {
        const factorialize = rewire(testPath[path]).__get__('factorialize');
        expect(factorialize(5)).toBe(120);
        expect(factorialize(10)).toBe(3628800);
        expect(factorialize(20)).toBe(2432902008176640000);
    })
    test('Given value 0 to factorialize should return 1', () => {
        const factorialize = rewire(testPath[path]).__get__('factorialize');
        expect(factorialize(0)).toBe(1);
    })
}