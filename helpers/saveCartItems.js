const saveCartItems = (cartItems) => {
  // if (!cartItems) return new Error('mensagem esperada aqui');
  localStorage.setItem('cartItems', cartItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
