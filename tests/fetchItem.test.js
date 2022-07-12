require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

  test('if fetchItem is a function', () => {
    const tested = typeof(fetchItem);
    const expected = 'function';
    expect(tested).toEqual(expected);
  });

  test('if "fetch" is called one time when you call "fetchItems("MLB1615760527")"', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('if fetch URL is : https://api.mercadolibre.com/items/MLB1615760527', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    const tested = fetch;
    const expected = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(tested).toHaveBeenCalledWith(expected);
  });
  
  test('if fetchItems("MLB1615760527") returns the same that is into "item"', async () => {
    expect.assertions(1)
    const tested = await fetchItem('MLB1615760527');
    expect(tested).toEqual(item);
  });

  // test('if fetchItems() returns the expected error', async () => {
  //   const tested = await fetchItems();
  //   const expected = new Error('You must provide and url');
  //   expect(tested).toEqual(expected);
  // });
});
