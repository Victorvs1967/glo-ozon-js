import renderCart from './render_cart';
import postData from './post_data';
import renderCounter from './render_counter';

const cart = () => {
  const cartBtn = document.getElementById('cart'),
    cartModal = document.querySelector('.cart'),
    cartClose = cartModal.querySelector('.cart-close'),
    goodsWrapper = document.querySelector('.goods'),
    cartWrapper = cartModal.querySelector('.cart-wrapper'),
    cartConfirm = cartModal.querySelector('.cart-confirm');

  const openCart = () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cartModal.style.display = 'flex';
    renderCart(cart);
  };

  const closeCart = () => cartModal.style.display = 'none';

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);

  goodsWrapper.addEventListener('click', event => {
    const key = event.target.classList.contains('btn-primary') ? event.target.closest('.card').dataset.key : '';
    const goods = JSON.parse(localStorage.getItem('goods'));
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    localStorage.setItem('cart', JSON.stringify([ ...cart, goods.find(item => item.id === +key) ]));
    renderCounter();
  });

  cartWrapper.addEventListener('click', event => {
    const key = event.target.classList.contains('btn-primary') ? event.target.closest('.card').dataset.key : '';
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex(item => item.id === +key);

    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(cart);
    renderCounter();
  });

  cartConfirm.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    postData(cart).then(() => {
      localStorage.removeItem('cart');
      renderCounter();
      renderCart([]);
    });
  });

};

export default cart;