const postData = data => {
  return fetch('https://glo-ozon-app-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json());
};

export default postData;

