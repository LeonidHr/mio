function getProdId() {
  let json = localStorage.getItem('prodToCart');
  if (json) {
    // Если в локальном хранилище есть JSON объект, возвращаем его
    let buttonClicks = JSON.parse(json);
    return buttonClicks;
  } else {
    // Если объекта в локальном хранилище нет, возвращаем пустой JSON объект
    return '{}';
  }
}


const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

async function viewProductsCard() {
  const data = await getData('./assets/json/products.json');
  let postsData = data.products;
  const cartWrap = document.getElementById('cards-wrap');
  const summWrap = document.getElementById('cart-summ');
  let summ = 0;
  let prodId = getProdId();

  if (prodId.length > 0) {
    prodId.forEach((item, i) => {
      const postEl = `
        <div id=${postsData[item.id].id} data-num="${i}" class="checkout__cart cart-checkout checkout-grid">
          <div class="cart-checkout__name">
            <button type="button" class="cart-checkout__exit">
              <img src="./img/exit.svg" alt="Выкитуть с корзины">
            </button>
            <div class="cart-checkout__img">
              <img src="${postsData[item.id].imgPath}" alt="${postsData[item.id].title}">
            </div>
            <div class="cart-checkout__content">
              <div class="cart-checkout__title cart-checkout__text">${postsData[item.id].title}</div>
              <div class="cart-checkout__articul">
                <div>Артикул</div> 
                <span>${postsData[item.id].articul}</span>
              </div>
            </div>
          </div>
          <div class="cart-checkout__count cart-checkout__text"><span>${item.count}</span> шт</div>
          <div class="cart-checkout__price cart-checkout__text"><span>${postsData[item.id].price * item.count}</span> €</div>
        </div>
      `;
      cartWrap.insertAdjacentHTML("beforeend", postEl);
    
      summ += postsData[item.id].price * item.count;
    });
  
    summWrap.innerHTML = summ;
  
    document.querySelectorAll('.cart-checkout__exit').forEach(btnExit => {
        console.log(btnExit);
        btnExit.addEventListener("click", e => {
          removeProduct(e, prodId);
          viewProductsCard();
        });
      
    });
  } else {
    document.querySelector('.js-cart-empty').style.display = "block";
    document.getElementById('checkout').style.display = "none";
  }
}

viewProductsCard();

function removeProduct(e, prodId) {
  const carts = document.querySelectorAll('.cart-checkout');

  prodId.forEach(item => {
    if (item.id == e.target.closest('.cart-checkout').getAttribute('id')) {
      prodId.splice(e.target.closest('.cart-checkout').dataset.num, 1);
    }
  });
  // e.target.closest('.cart-checkout').remove();

  carts.forEach(cart => {
    cart.remove();
  });

  localStorage.setItem('prodToCart', JSON.stringify(prodId));

}