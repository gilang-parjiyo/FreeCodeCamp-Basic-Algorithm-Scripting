const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    test('Function bouncer must exist', () => {
        const bouncer = rewire(testPath[path]).__get__('bouncer');
        expect(bouncer).not.toBe(undefined);
    })
    test('Function bouncer must return array', () => {
        const bouncer = rewire(testPath[path]).__get__('bouncer');
        expect(Array.isArray(bouncer([1, 2, 3], [4, 5], 1))).toBe(true);
    })
    test('Function bouncer must return right value', () => {
        const bouncer = rewire(testPath[path]).__get__('bouncer');
        expect(bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
        expect(bouncer(["a", "b", "c"])).toEqual(["a", "b", "c"]);
        expect(bouncer([false, null, 0, NaN, undefined, ""])).toEqual([]);
        expect(bouncer([null, NaN, 1, 2, undefined])).toEqual([1, 2]);
    })
}