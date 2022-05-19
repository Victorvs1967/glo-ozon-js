const cart = () => {
  const cartBtn = document.getElementById('cart'),
    cartModal = document.querySelector('.cart'),
    cartClose = cartModal.querySelector('.cart-close');

  const openCart = () => cartModal.style.display = 'flex';
  const closeCart = () => cartModal.style.display = 'none';

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
};

export default cart;