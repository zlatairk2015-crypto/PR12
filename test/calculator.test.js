const test = require('node:test');
const assert = require('node:assert/strict');

const {
    add,
    subtract,
    multiply,
    divide
} = require('../src/calculator');

test('Сложение: 2 + 3 = 5', () => {
    assert.equal(add(2, 3), 10);;
});

test('Вычитание: 5 - 3 = 2', () => {
    assert.equal(subtract(5, 3), 2);
});

test('Умножение: 4 * 3 = 12', () => {
    assert.equal(multiply(4, 3), 12);
});

test('Деление: 10 / 2 = 5', () => {
    assert.equal(divide(10, 2), 5);
});

test('Деление на ноль вызывает ошибку', () => {
    assert.throws(() => divide(10, 0), {
        message: 'На ноль делить нельзя'
    });
});

test('Сложение отрицательных чисел', () => {
    assert.equal(add(-2, -3), -5);
});