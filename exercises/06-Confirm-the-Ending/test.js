const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js'
}

for (const path in testPath) {
    test('Function confirmEnding must be exist', () => {
        const confirmEnding = rewire(testPath[path]).__get__('confirmEnding')
        expect(confirmEnding).not.toBe(undefined);
    })
    test('Function confirmEnding must be return boolean', () => {
        const confirmEnding = rewire(testPath[path]).__get__('confirmEnding')
        expect(typeof confirmEnding('Bastian', 'n')).toBe('boolean');
    })
    test('Function confirmEnding must be return right value', () => {
        const confirmEnding = rewire(testPath[path]).__get__('confirmEnding')
        expect(confirmEnding("Congratulation", "on")).toBe(true);
        expect(confirmEnding("Connor", "n")).toBe(false);
        expect(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).toBe(false);
        expect(confirmEnding("He has to give me a new name", "name")).toBe(true);
        expect(confirmEnding("Open sesame", "same")).toBe(true);
        expect(confirmEnding("Open sesame", "sage")).toBe(false);
        expect(confirmEnding("Open sesame", "game")).toBe(false);
        expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).toBe(false);
        expect(confirmEnding("Abstraction", "action")).toBe(true);
    })


}


