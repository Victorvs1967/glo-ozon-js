const postData = () => {
  return fetch('https://glo-ozon-app-default-rtdb.europe-west1.firebasedatabase.app/goods.json', {
    method: 'POST',
    body: JSON.stringify({
      title: "Good Game",
      price: 2000,
      sale: true,
      img: "https://cdn.stocksnap.io/img-thumbs/960w/backgammon-board%20game_6DDCC9ZELA.jpg",
      category: "Игры и софт"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json());
};

export default postData;

