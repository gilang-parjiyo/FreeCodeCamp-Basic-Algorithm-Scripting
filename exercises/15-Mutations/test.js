const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    test('Function mutation must exist', () => {
        const mutation = rewire(testPath[path]).__get__('mutation');
        expect(mutation).not.toBe(undefined);
    })
    test('Function mutation must return array', () => {
        const mutation = rewire(testPath[path]).__get__('mutation');
        expect(typeof mutation(["hello", "hey"])).toBe('boolean');
    })
    test('Function mutation must return right value', () => {
        const mutation = rewire(testPath[path]).__get__('mutation');
        expect(mutation(["hello", "hey"])).toEqual(false);
        expect(mutation(["hello", "Hello"])).toEqual(true);
        expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toEqual(true);
        expect(mutation(["Mary", "Army"])).toEqual(true);
        expect(mutation(["Mary", "Aarmy"])).toEqual(true);
        expect(mutation(["Alien", "line"])).toEqual(true);
        expect(mutation(["floor", "for"])).toEqual(true);
        expect(mutation(["hello", "neo"])).toEqual(false);
        expect(mutation(["voodoo", "no"])).toEqual(false);
        expect(mutation(["ate", "date"])).toEqual(false);
        expect(mutation(["Tiger", "Zebra"])).toEqual(false);
        expect(mutation(["Noel", "Ole"])).toEqual(true);
 

    })
}