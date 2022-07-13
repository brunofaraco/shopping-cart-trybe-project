const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  
  test('if "getSavedCartItems.getItem" is called 1 time', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  });

  test('if "getSavedCartItems.getItem" returns the right object', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  });

  // test ('', () => {
// teste para error
  // });
});
