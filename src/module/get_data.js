const getData = () => {
  return fetch(`https://glo-ozon-app-default-rtdb.europe-west1.firebasedatabase.app/goods.json`)
    .then(response => response.json());
};

export default getData;

