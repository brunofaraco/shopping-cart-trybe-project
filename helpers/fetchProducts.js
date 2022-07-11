const fetchProducts = async (product) => {
  const apiMercadoLivre = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(apiMercadoLivre);
  const data = await response.json();
  return data;
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
