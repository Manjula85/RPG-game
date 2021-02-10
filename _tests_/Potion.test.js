const { expect } = require('@jest/globals');
const Potion = require('../lib/Potion.js');
//const { test, expect } = require('@jest/globals');
//const { number } = require('yargs');

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});