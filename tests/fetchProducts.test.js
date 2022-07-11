require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  test('if fetchProducts is a function', () => {
    const tested = typeof(fetchProducts);
    const expected = 'function';
    expect(tested).toEqual(expected);
  });

  test('if "fetch" is called one time when you call "fetchProducts("computador")"', async () => {
    expect.assertions(1);
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('if fetch URL is :https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    const tested = fetch;
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(tested).toHaveBeenCalledWith(expected);
  });
  
  test('if fetchProducts("computador") returns the same that is into "computadorSearch"', async () => {
    expect.assertions(1)
    const tested = await fetchProducts("computador");
    expect(tested).toEqual(computadorSearch);
  });

  test('if fetchProducts() returns the expected error', async () => {
    const tested = await fetchProducts();
    const expected = new Error('You must provide and url');
    expect(tested).toEqual(expected);
  });
});
