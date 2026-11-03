const test = require('node:test');
const assert = require('node:assert');
const {add, multiply} = require('../src/math.js');


test('add 2+3 = 5',() => {
    assert.strictEqual(add(2,3), 5);
});

test('multiply 4*5=20' ,() => {
    assert.strictEqual(multiply(4,5), 20);
});