const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    // 3: './solution2.js',
    // 4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    test('Function titleCase must exist', () => {
        const titleCase = rewire(testPath[path]).__get__('titleCase');
        expect(titleCase).not.toBe(undefined);
    })
    test('Function titleCase must return string', () => {
        const titleCase = rewire(testPath[path]).__get__('titleCase');
        expect(typeof titleCase(`I'm a little tea pot`)).toBe('string');
    })
    test('Function titleCase must return right value', () => {
        const titleCase = rewire(testPath[path]).__get__('titleCase');
        expect(titleCase("I'm a little tea pot")).toBe(`I'm A Little Tea Pot`);
        expect(titleCase("sHoRt AnD sToUt")).toBe(`Short And Stout`);
        expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe(`Here Is My Handle Here Is My Spout`);

    })

}