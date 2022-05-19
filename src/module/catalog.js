import { categoryFilter } from "./filters";
import getData from "./get_data";
import renderGoods from "./render_goods";

const catalog = () => {
  const btn = document.querySelector('.catalog-button > button'),
        modal = document.querySelector('.catalog');

  let isOpen = false;

  btn.addEventListener('click', () => {
    modal.style.display = isOpen ? '' : 'block';
    modal.querySelectorAll('li').forEach(item => item.addEventListener('click', event => {
      getData().then(goods => renderGoods(categoryFilter(goods, event.target.textContent)));
    }));
    isOpen = !isOpen;
  });
};

export default catalog;