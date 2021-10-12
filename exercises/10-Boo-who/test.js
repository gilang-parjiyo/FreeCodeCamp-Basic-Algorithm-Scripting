const rewire = require('rewire');
const testPath = {
    1: './app.js',
}

for (const path in testPath) {
    test('Function booWho must exist', () => {
        const booWho = rewire(testPath[path]).__get__('booWho');
        expect(booWho).not.toBe(undefined);
    })
    test('Function booWho must return right value', () => {
        const booWho = rewire(testPath[path]).__get__('booWho');
        expect(booWho(true)).toBe(true);
        expect(booWho(false)).toBe(true);
        expect(booWho([1, 2])).toBe(false);
        expect(booWho([].slice)).toBe(false);
        expect(booWho({ 'a': 1 })).toBe(false);
        expect(booWho(1)).toBe(false);
        expect(booWho("a")).toBe(false);
        expect(booWho("true")).toBe(false);
        expect(booWho("false")).toBe(false);

    })

}