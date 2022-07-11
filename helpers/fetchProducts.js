const fetchProducts = async (product) => {
  try {
    if (!product) throw new Error('You must provide and url');
    const apiMercadoLivre = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(apiMercadoLivre);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
