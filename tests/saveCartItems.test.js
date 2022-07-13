const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  test('if "localStorage.setItem" is called 1 time', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  });

  test('if "localStorage.setItem" is called with the right parameters', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>')
  });

  // test('', () => {
  //   saveCartItems('<ol><li>Item</li></ol>')
  //   const cart = localStorage.setItem('cartItems', '<ol><li>Item2</li></ol>')
  //   expect
  // });
});
