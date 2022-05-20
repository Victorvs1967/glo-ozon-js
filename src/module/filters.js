export const searchFilter = (goods, value) => {
  return goods.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
};

export const categoryFilter = (goods, category) => {
  return goods.filter(item => item.category.includes(category));
};

export const priceFilter = (goods, min, max) => {
  return goods.filter(item => {
    if (min === '' && max === '') {
      return item;
    } else if (min !== '' && max !== '') {
      return item.price > +min && item.price < +max;
    } else if (min !== '' && max === '') {
      return item.price > +min;
    } else if (min === '' && max !== '') {
      return item.price < +max;
    }
  });
};

export const discountFilter = (goods, value) => {
  return goods.filter(item => value ? item.sale === true : item);
};