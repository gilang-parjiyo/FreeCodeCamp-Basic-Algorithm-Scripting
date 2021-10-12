const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    test('Function chunkArrayInGroups must exist', () => {
        const chunkArrayInGroups = rewire(testPath[path]).__get__('chunkArrayInGroups');
        expect(chunkArrayInGroups).not.toBe(undefined);
    })
    test('Function chunkArrayInGroups must return array', () => {
        const chunkArrayInGroups = rewire(testPath[path]).__get__('chunkArrayInGroups');
        expect(Array.isArray(chunkArrayInGroups(["a", "b", "c", "d"], 2))).toBe(true);
    })
    test('Function chunkArrayInGroups must return right value', () => {
        const chunkArrayInGroups = rewire(testPath[path]).__get__('chunkArrayInGroups');
        expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toEqual(expect.arrayContaining([["a", "b"], ["c", "d"]]));
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual(expect.arrayContaining([[0, 1, 2], [3, 4, 5]]));
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toEqual(expect.arrayContaining([[0, 1], [2, 3], [4, 5]]));
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toEqual(expect.arrayContaining([[0, 1, 2, 3], [4, 5]]));
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toEqual(expect.arrayContaining([[0, 1, 2], [3, 4, 5], [6]]));
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual(expect.arrayContaining([[0, 1, 2, 3], [4, 5, 6, 7], [8]]));
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual(expect.arrayContaining([[0, 1], [2, 3], [4, 5], [6, 7], [8]]));
        
    })
}