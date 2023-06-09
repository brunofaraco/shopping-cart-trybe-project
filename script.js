const cartItemsOl = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// sku = id | name = title | image = thumbnail
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

 // requisito 9
 
 const pricesSum = () => [...document.querySelectorAll('.cart__item')]
  .reduce((acc, child) => acc + Number(child.innerText
    .split('$')[1]), 0);

 // const cartItemsChildren = [...document.querySelectorAll('.cart__item')];
  // const totalPrice = cartItemsChildren.reduce((acc, child) => acc + Number(child.innerText
  //   .split('|')[2].split('$')[1]), 0);
  //   return totalPrice;

const totalPriceAttribution = () => {
  const totalPriceDiv = document.querySelector('.total-price');
  totalPriceDiv.innerText = pricesSum();
};

  // requisito 5

const cartItemClickListener = ({ target }) => {
  if (target.className === 'cart__item') {
  target.remove();

  // parte do requisito 8
  saveCartItems(cartItemsOl.innerHTML);

  // parte do requisito 9
  totalPriceAttribution();
}
};

// sku = id | name = title | salePrice = price
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

  // requisito 2

const getComputerResults = async () => {
  const computerPromise = await fetchProducts('computador');
  const computerPromiseResults = computerPromise.results;
  
  // Elemento pai, onde serão postos todos os itens do array pego na const "computerPromiseResults"
  const sectionItems = document.querySelector('.items');

  computerPromiseResults.forEach(({ id: sku, title: name, thumbnail: image }) => {
    const productCreated = createProductItemElement({ sku, name, image });
    sectionItems.appendChild(productCreated);
  });
};
 
  // requisito 4

const addToCart = async ({ target }) => {
  if (target.classList.contains('item__add')) {
    const targetID = getSkuFromProductItem(target.parentNode);
    
    const targetObject = await fetchItem(targetID);
    const { id: sku, title: name, price: salePrice } = targetObject;
    
    const itemLi = createCartItemElement({ sku, name, salePrice });
    cartItemsOl.appendChild(itemLi);

    // adição para o requisito 8
    saveCartItems(cartItemsOl.innerHTML);
    // adição para o requisito 9
    totalPriceAttribution();
  }
};

const sectionItemsListener = () => {
const itemsContainer = document.querySelector('.items');
itemsContainer.addEventListener('click', addToCart);
};

// requisito 8

const loadCartItems = () => {
  cartItemsOl.innerHTML = getSavedCartItems();
  cartItemsOl.addEventListener('click', cartItemClickListener);
};

// requisito 10

const clearCart = () => {
  cartItemsOl.innerHTML = '';
  totalPriceAttribution();
  saveCartItems(cartItemsOl.innerHTML);
};

const buttonClicker = () => {
  const emptyCartButton = document.querySelector('.empty-cart');
  emptyCartButton.addEventListener('click', clearCart);
};

// requisito 11

const insertLoading = () => {
  const loadingDiv = createCustomElement('div', 'loading', 'carregando...');
  const container = document.querySelector('.container');
  container.prepend(loadingDiv);
};

const removeLoading = () => {
  document.querySelector('.loading').remove();
};

window.onload = async () => {
  insertLoading();
  await getComputerResults();
  removeLoading();
  sectionItemsListener();
  loadCartItems();
  buttonClicker();
  totalPriceAttribution();
  // console.log(pricesSum());
};
