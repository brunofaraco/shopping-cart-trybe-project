const fetchItem = async (item) => {
  try {
    if (!item) throw new Error('You must provide and url');
    const apiMercadoLivre = `https://api.mercadolibre.com/items/${item}`;
    const response = await fetch(apiMercadoLivre);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
