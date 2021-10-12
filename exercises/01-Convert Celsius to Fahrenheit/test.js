const rewire = require('rewire');

test('Function convertToFahrenheit must exist', () => {
    const convertToFahrenheit = rewire('./app.js').__get__('convertToFahrenheit');
    expect(convertToFahrenheit).not.toBe(undefined);
})

test('Given 0 to convertToFahrenheit must return number', () => {
    const convertToFahrenheit = rewire('./app.js').__get__('convertToFahrenheit');
    expect(typeof convertToFahrenheit(0)).toBe('number');
})
test('Given -30 to convertToFahrenheit must return -22', () => {
    const convertToFahrenheit = rewire('./app.js').__get__('convertToFahrenheit');
    expect(convertToFahrenheit(-30)).toBe(-22);
})
test('Given -10 to convertToFahrenheit must return 14', () => {
    const convertToFahrenheit = rewire('./app.js').__get__('convertToFahrenheit');
    expect(convertToFahrenheit(-10)).toBe(14);
})
test('Given 0 to convertToFahrenheit must return 32', () => {
    const convertToFahrenheit = rewire('./app.js').__get__('convertToFahrenheit');
    expect(convertToFahrenheit(0)).toBe(32);
})
test('Given 20 to convertToFahrenheit must return 68', () => {
    const convertToFahrenheit = rewire('./app.js').__get__('convertToFahrenheit');
    expect(convertToFahrenheit(20)).toBe(68);
})
test('Given 30 to convertToFahrenheit must return 86', () => {
    const convertToFahrenheit = rewire('./app.js').__get__('convertToFahrenheit');
    expect(convertToFahrenheit(30)).toBe(86);
})



