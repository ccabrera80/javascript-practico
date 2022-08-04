const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shopingCardContainer = document.querySelector('#shopingCardContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shopingCardContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shopingCardContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shopingCardContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shopingCardContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }

  const isProductDetailClose = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClose) {
    productDetailContainer.classList.add('inactive');
    //mobileMenu.classList.add('inactive'); 
  }
  
  shopingCardContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shopingCardContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Jersey The Faster 01',
  price: 32,
  image: './imagenes/THE FASTER 01.jpg',
});

productList.push({
  name: 'Jersey The Faster 02',
  price: 32,
  image: './imagenes/THE FASTER 02.jpg',
});

productList.push({
  name: 'Jersey The Faster 03',
  price: 32,
  image: './imagenes/THE FASTER 03.jpg',
});

productList.push({
  name: 'Jersey The Faster 04',
  price: 32,
  image: './imagenes/THE FASTER 04.jpg',
});


function renderProductos (arr) {

  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', product.image);
    ProductImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
    
  }
}

renderProductos(productList);