const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js'
}

for (const path in testPath) {
    test('Function truncateString must exist', ()=> {
        const truncateString = rewire(testPath[path]).__get__('truncateString');
        expect(truncateString).not.toBe(undefined);
    })
    test('Function truncateString must return string', ()=> {
        const truncateString = rewire(testPath[path]).__get__('truncateString');
        expect(typeof truncateString('makan', 2)).toBe('string');
    })
    test('Function truncateString must return right value', ()=> {
        const truncateString = rewire(testPath[path]).__get__('truncateString');
        expect(truncateString('A-tisket a-tasket A green and yellow basket', 8)).toBe('A-tisket....');
        expect(truncateString('Peter Piper picked a peck of pickled peppers', 11)).toBe('Peter Piper....');
        expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)).toBe('A-tisket a-tasket A green and yellow basket');
        expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)).toBe('A-tisket a-tasket A green and yellow basket');
        expect(truncateString("A-", 1)).toBe('A....');
        expect(truncateString("Absolutely Longer", 2)).toBe('Ab....');
    })
    
}