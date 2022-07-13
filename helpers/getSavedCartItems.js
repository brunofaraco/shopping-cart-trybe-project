const getSavedCartItems = (param) => {
  if (param) throw new Error('Error 240');
  localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
