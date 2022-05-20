import getData from "./get_data";
import renderGoods from './render_goods';
import { discountFilter, priceFilter } from './filters';

const filter = goods => {
  const minInput = document.getElementById('min'),
        maxInput = document.getElementById('max'),
        discoutChecked = document.getElementById('discount-checkbox'),
        filterCheck = document.querySelector('.filter-check_checkmark');

  minInput.addEventListener('input', () => getData()
    .then(data => renderGoods(priceFilter(discountFilter(data, discoutChecked.checked), minInput.value, maxInput.value))));

  maxInput.addEventListener('input', () => getData()
    .then(data => renderGoods(priceFilter(discountFilter(data, discoutChecked.checked), minInput.value, maxInput.value))));

  discoutChecked.addEventListener('change', () => {
    discoutChecked.checked ? filterCheck.classList.add('checked') : filterCheck.classList.remove('checked');
    getData().then(data => renderGoods(priceFilter(discountFilter(data, discoutChecked.checked), minInput.value, maxInput.value)));
  });
};

export default filter;