const { test, expect } = require('@jest/globals');
const randomNumber = require('../lib/random.js');

test('Check if 10 is equal to 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});