const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    test('Function getIndexToIns must exist', () => {
        const getIndexToIns = rewire(testPath[path]).__get__('getIndexToIns');
        expect(getIndexToIns).not.toBe(undefined);
    })
    test('Function getIndexToIns must return array', () => {
        const getIndexToIns = rewire(testPath[path]).__get__('getIndexToIns');
        expect(typeof getIndexToIns([10, 20, 30, 40, 50], 35)).toBe('number');
    })
    test('Function getIndexToIns must return right value', () => {
        const getIndexToIns = rewire(testPath[path]).__get__('getIndexToIns');
        expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(3);
        expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toEqual(2);
        expect(getIndexToIns([40, 60], 50)).toEqual(1);
        expect(getIndexToIns([3, 10, 5], 3)).toEqual(0);
        expect(getIndexToIns([5, 3, 20, 3], 5)).toEqual(2);
        expect(getIndexToIns([2, 20, 10], 19)).toEqual(2);
        expect(getIndexToIns([2, 5, 10], 15)).toEqual(3);
        expect(getIndexToIns([], 1)).toEqual(0);
   
    })
}