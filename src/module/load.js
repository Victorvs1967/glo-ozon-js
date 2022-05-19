import getData from "./get_data";
import renderGoods from "./render_goods";

const load = () => {
  getData().then(data => renderGoods(data));
};

export default load;