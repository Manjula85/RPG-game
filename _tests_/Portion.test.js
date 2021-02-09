const Potion = require('..lib/Potion.js');
const { test, expect } = require('@jest/globals');
const { number } = require('yargs');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(number));
});