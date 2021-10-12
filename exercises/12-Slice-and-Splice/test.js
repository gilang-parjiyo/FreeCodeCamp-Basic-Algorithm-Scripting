const rewire = require('rewire');
const testPath = {
    1: './app.js',
}

for (const path in testPath) {
    test('Function frankenSplice must exist', () => {
        const frankenSplice = rewire(testPath[path]).__get__('frankenSplice');
        expect(frankenSplice).not.toBe(undefined);
    })
    test('Function frankenSplice must return array', () => {
        const frankenSplice = rewire(testPath[path]).__get__('frankenSplice');
        expect(Array.isArray(frankenSplice([1, 2, 3], [4, 5], 1))).toBe(true);
    })
    test('Function frankenSplice must return right value', () => {
        const frankenSplice = rewire(testPath[path]).__get__('frankenSplice');
        expect(frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
        expect(frankenSplice([1, 2], ["a", "b"], 1)).toEqual(["a", 1, 2, "b"]);
        expect(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)).toEqual(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
        expect(frankenSplice([1, 2, 3, 4], [], 0)).toEqual([1, 2, 3, 4]);
    })
}