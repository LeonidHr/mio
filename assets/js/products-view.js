
const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

async function viewProducts() {
  const data = await getData('./assets/json/products.json');
  let postsData = data.products;

  viewAllProducts(postsData);
  viewFoodProducts(postsData);
  viewSleepProducts(postsData);
  viewThinkProducts(postsData);
  viewImmunityProducts(postsData);
  viewOtherProducts(postsData);
}

function viewAllProducts(postsData) {
  const badsWrap = document.getElementById('all-bads');


  postsData.forEach((el, i) => {
    const postEl = `
      <div id="${el.id}" class="product-preview-elem">
        <form
          action="/cart_items"
          method="post"
          data-product-id="248406913"
          class="product-preview is-zero-count-preorder"
        >
          <div class="product-preview__content">
            <div class="product-preview__area-photo">
              <div class="product-preview__photo">
                <div class="img-ratio img-fit">
                  <div class="img-ratio__inner">
                    <a
                      href="product/product.html"
                    >
                      <picture>
                        <source
                          media="(min-width:768px)"
                          data-srcset="${el.imgPath}"
                          type="image/webp"
                          class="lazyload"
                        />
                        <source
                          media="(max-width:767px)"
                          data-srcset="${el.imgPath}"
                          type="image/webp"
                          class="lazyload"
                        />
                        <img
                          data-src="${el.imgPath}"
                          class="lazyload"
                          alt="${el.title}"
                        />
                      </picture>
                    </a>
                  </div>
                </div>
              
              </div>
            </div>
            <div class="product-preview__area-title">
              <div class="product-preview__title">
                <a href="product/product.html">
                  <p class="product-preview__label">${el.title}</p>
                  <p class="product-preview__text">${el.text}</p>      
                  <p class="product-preview__articul">${el.articul}</p>      
                </a>
              </div>
            </div>
            
          </div>
        </form>

    
      </div>
    `;

    badsWrap.insertAdjacentHTML("beforeend", postEl);
  });
}
function viewFoodProducts(postsData) {
  const badsWrap = document.getElementById('food-bads');


  postsData.forEach((el, i) => {
    if (el.category === 'food') {
      const postEl = `
        <div id="${el.id}" class="product-preview-elem">
          <form
            action="/cart_items"
            method="post"
            data-product-id="248406913"
            class="product-preview is-zero-count-preorder"
          >
            <div class="product-preview__content">
              <div class="product-preview__area-photo">
                <div class="product-preview__photo">
                  <div class="img-ratio img-fit">
                    <div class="img-ratio__inner">
                      <a
                        href="product/product.html"
                      >
                        <picture>
                          <source
                            media="(min-width:768px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <source
                            media="(max-width:767px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <img
                            data-src="${el.imgPath}"
                            class="lazyload"
                            alt="${el.title}"
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                
                </div>
              </div>
              <div class="product-preview__area-title">
                <div class="product-preview__title">
                  <a href="product/product.html">
                    <p class="product-preview__label">${el.title}</p>
                    <p class="product-preview__text">${el.text}</p>      
                    <p class="product-preview__articul">${el.articul}</p>      
                  </a>
                </div>
              </div>
              
            </div>
          </form>

      
        </div>
      `;

      badsWrap.insertAdjacentHTML("beforeend", postEl);
    }
  });
}
function viewSleepProducts(postsData) {
  const badsWrap = document.getElementById('sleep-bads');


  postsData.forEach((el, i) => {
    if (el.category === 'sleep') {
      const postEl = `
        <div id="${el.id}" class="product-preview-elem">
          <form
            action="/cart_items"
            method="post"
            data-product-id="248406913"
            class="product-preview is-zero-count-preorder"
          >
            <div class="product-preview__content">
              <div class="product-preview__area-photo">
                <div class="product-preview__photo">
                  <div class="img-ratio img-fit">
                    <div class="img-ratio__inner">
                      <a
                        href="product/product.html"
                      >
                        <picture>
                          <source
                            media="(min-width:768px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <source
                            media="(max-width:767px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <img
                            data-src="${el.imgPath}"
                            class="lazyload"
                            alt="${el.title}"
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                
                </div>
              </div>
              <div class="product-preview__area-title">
                <div class="product-preview__title">
                  <a href="product/product.html">
                    <p class="product-preview__label">${el.title}</p>
                    <p class="product-preview__text">${el.text}</p>      
                    <p class="product-preview__articul">${el.articul}</p>      
                  </a>
                </div>
              </div>
              
            </div>
          </form>

      
        </div>
      `;

      badsWrap.insertAdjacentHTML("beforeend", postEl);
    }
  });
}
function viewThinkProducts(postsData) {
  const badsWrap = document.getElementById('think-bads');


  postsData.forEach((el, i) => {
    if (el.category === 'think') {
      const postEl = `
        <div id="${el.id}" class="product-preview-elem">
          <form
            action="/cart_items"
            method="post"
            data-product-id="248406913"
            class="product-preview is-zero-count-preorder"
          >
            <div class="product-preview__content">
              <div class="product-preview__area-photo">
                <div class="product-preview__photo">
                  <div class="img-ratio img-fit">
                    <div class="img-ratio__inner">
                      <a
                        href="product/product.html"
                      >
                        <picture>
                          <source
                            media="(min-width:768px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <source
                            media="(max-width:767px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <img
                            data-src="${el.imgPath}"
                            class="lazyload"
                            alt="${el.title}"
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                
                </div>
              </div>
              <div class="product-preview__area-title">
                <div class="product-preview__title">
                  <a href="product/product.html">
                    <p class="product-preview__label">${el.title}</p>
                    <p class="product-preview__text">${el.text}</p>      
                    <p class="product-preview__articul">${el.articul}</p>      
                  </a>
                </div>
              </div>
              
            </div>
          </form>

      
        </div>
      `;

      badsWrap.insertAdjacentHTML("beforeend", postEl);
    }
  });
}
function viewImmunityProducts(postsData) {
  const badsWrap = document.getElementById('immunity-bads');


  postsData.forEach((el, i) => {
    if (el.category === 'immunity') {
      const postEl = `
        <div id="${el.id}" class="product-preview-elem">
          <form
            action="/cart_items"
            method="post"
            data-product-id="248406913"
            class="product-preview is-zero-count-preorder"
          >
            <div class="product-preview__content">
              <div class="product-preview__area-photo">
                <div class="product-preview__photo">
                  <div class="img-ratio img-fit">
                    <div class="img-ratio__inner">
                      <a
                        href="product/product.html"
                      >
                        <picture>
                          <source
                            media="(min-width:768px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <source
                            media="(max-width:767px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <img
                            data-src="${el.imgPath}"
                            class="lazyload"
                            alt="${el.title}"
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                
                </div>
              </div>
              <div class="product-preview__area-title">
                <div class="product-preview__title">
                  <a href="product/product.html">
                    <p class="product-preview__label">${el.title}</p>
                    <p class="product-preview__text">${el.text}</p>      
                    <p class="product-preview__articul">${el.articul}</p>      
                  </a>
                </div>
              </div>
              
            </div>
          </form>

      
        </div>
      `;

      badsWrap.insertAdjacentHTML("beforeend", postEl);
    }
  });
}

function viewOtherProducts(postsData) {
  const badsWrap = document.getElementById('other-bads');


  postsData.forEach((el, i) => {
    if (el.category === 'other') {
      const postEl = `
        <div id="${el.id}" class="product-preview-elem">
          <form
            action="/cart_items"
            method="post"
            data-product-id="248406913"
            class="product-preview is-zero-count-preorder"
          >
            <div class="product-preview__content">
              <div class="product-preview__area-photo">
                <div class="product-preview__photo">
                  <div class="img-ratio img-fit">
                    <div class="img-ratio__inner">
                      <a
                        href="product/product.html"
                      >
                        <picture>
                          <source
                            media="(min-width:768px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <source
                            media="(max-width:767px)"
                            data-srcset="${el.imgPath}"
                            type="image/webp"
                            class="lazyload"
                          />
                          <img
                            data-src="${el.imgPath}"
                            class="lazyload"
                            alt="${el.title}"
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                
                </div>
              </div>
              <div class="product-preview__area-title">
                <div class="product-preview__title">
                  <a href="product/product.html">
                    <p class="product-preview__label">${el.title}</p>
                    <p class="product-preview__text">${el.text}</p>      
                    <p class="product-preview__articul">${el.articul}</p>      
                  </a>
                </div>
              </div>
              
            </div>
          </form>

      
        </div>
      `;

      badsWrap.insertAdjacentHTML("beforeend", postEl);
    }
  });
}

viewProducts();


