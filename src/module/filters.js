import getData from "./get_data";

export const searchFilter = (goods, value) => {
  return goods.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
};

export const categoryFilter = (goods, category) => {
  return goods.filter(item => item.category.includes(category));
};
