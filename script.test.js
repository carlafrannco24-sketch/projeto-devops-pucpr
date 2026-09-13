const assert = require('node:assert');
const { test } = require('node:test');
const { deveExibirProduto } = require('./script');

test('Todos deve exibir produto da categoria fantasia', () => {
    assert.strictEqual(deveExibirProduto('todos', 'fantasia'), true);
});

test('Todos deve exibir produto da categoria decoracao', () => {
    assert.strictEqual(deveExibirProduto('todos', 'decoracao'), true);
});

test('Fantasia deve exibir produto da categoria fantasia', () => {
    assert.strictEqual(deveExibirProduto('fantasia', 'fantasia'), true);
});

test('Fantasia nao deve exibir produto da categoria decoracao', () => {
    assert.strictEqual(deveExibirProduto('fantasia', 'decoracao'), false);
});

test('Decoracao nao deve exibir produto da categoria fantasia', () => {
    assert.strictEqual(deveExibirProduto('decoracao', 'fantasia'), false);
});
