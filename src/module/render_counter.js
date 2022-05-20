const renderCounter = () => {
  const counter = document.querySelector('.counter');
  counter.textContent = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
};

export default renderCounter;