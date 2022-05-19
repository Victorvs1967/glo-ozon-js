import { searchFilter } from "./filters";
import getData from "./get_data";
import renderGoods from "./render_goods";

const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input');
  searchInput.addEventListener('input', event => {
    const value = event.target.value;
    getData().then(data => renderGoods(searchFilter(data, value)));
  });

};

export default search;