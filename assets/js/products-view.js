

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

async function viewProducts(categoryMain) {
  const data = await getData('./assets/json/products.json');
  let postsData = data.products;
  const badsWrap = document.getElementById('all-bads');

  viewAllProducts(postsData, badsWrap, categoryMain);
  addClassToFirst();

  document.querySelector('#bads-nav').addEventListener("click", e => {
    if (e.target.closest('.splide__slide')) {
      badsWrap.innerHTML = '';
      postsData.forEach((el, i) => {
        if (el.mainCategory == categoryMain && el.category == e.target.closest('.splide__slide').getAttribute('id')) {
          const postEl = `
            <div id="${el.id}" class="product-preview-elem ">
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
                            href="product/product${el.id}.html"
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
                                src="${el.imgPath}"
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
                      <a href="product/product${el.id}.html">
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

      toggleClass('.tabs__head-item', 'is-active', e); 

      if (e.target.closest('.splide__slide').getAttribute('id') == 'all') {
        viewAllProducts(postsData, badsWrap, categoryMain);
      }
    }
    
  });
}

function addClassToFirst() {
  document.querySelectorAll('.tabs__head-item').forEach(item => {
    item.classList.remove('is-active');
  });
  const itemAll = document.querySelector('#all'); 

  itemAll.querySelector('.tabs__head-item').classList.add('is-active');
}

function toggleClass(elClass, activeClass, e) {
  if (e.target.closest(elClass)) {
    document.querySelectorAll(elClass).forEach(item => {
      item.classList.remove(activeClass);
    });
  
    e.target.closest(elClass).classList.add(activeClass);
  }
}

function viewAllProducts(postsData, badsWrap, category) {

  badsWrap.innerHTML = '';

  postsData.forEach((el, i) => {
    if (el.mainCategory === category) {
      const postEl = `
        <div id="${el.id}" class="product-preview-elem ">
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
                        href="product/product${el.id}.html"
                      >
                      
                        <picture>
                          <img
                            src="${el.imgPath}"
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
                  <a href="product/product${el.id}.html">
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
viewProducts('Бады');

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#main-filter').addEventListener("click", e => {
    if (e.target.closest('.tabs-prod__title')) {
      viewProducts(e.target.closest('.tabs-prod__title').getAttribute('id'));
    }
    toggleClass('.tabs-prod__title', '_tab-active', e); 
  });
});




