

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

async function viewProducts() {
  const data = await getData('./assets/json/products.json');
  let postsData = data.products;
  const badsWrap = document.getElementById('all-bads');

  viewAllProducts(postsData, badsWrap);

  // const productElems = document.querySelectorAll('.product-preview-elem');

  // productElems.forEach((elem, i) => {
  //   elem.addEventListener("click", e => {
  //     addButtonClickToJson(e.target.closest('.product-preview-elem').getAttribute('id'));
  //   });
  // });
  

  document.querySelector('#bads-nav').addEventListener("click", e => {
    if (e.target.closest('.splide__slide')) {
      badsWrap.innerHTML = '';
      postsData.forEach((el, i) => {
        if (el.category == e.target.closest('.splide__slide').getAttribute('id')) {
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
                            href="product/product${i}.html"
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
                      <a href="product/product${i}.html">
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

      document.querySelectorAll('.tabs__head-item').forEach(item => {
        item.classList.remove('is-active');
      });

      e.target.closest('.tabs__head-item').classList.add('is-active');

      if (e.target.closest('.splide__slide').getAttribute('id') == 'all') {
        viewAllProducts(postsData, badsWrap)
      }
    }
    
  });
}

function viewAllProducts(postsData, badsWrap) {



  postsData.forEach((el, i) => {
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
                      href="product/product${i}.html"
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
                <a href="product/product${i}.html">
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
// function viewFoodProducts(postsData, badsWrap) {


//   postsData.forEach((el, i) => {
//     if (el.category === 'food') {
//       const postEl = `
//         <div id="${el.id}" class="product-preview-elem ">
//           <form
//             action="/cart_items"
//             method="post"
//             data-product-id="248406913"
//             class="product-preview is-zero-count-preorder"
//           >
//             <div class="product-preview__content">
//               <div class="product-preview__area-photo">
//                 <div class="product-preview__photo">
//                   <div class="img-ratio img-fit">
//                     <div class="img-ratio__inner">
//                       <a
//                         href="product/product${i}.html"
//                       >
//                         <picture>
//                           <img
//                             src="${el.imgPath}"
//                             class="lazyload"
//                             alt="${el.title}"
//                           />
//                         </picture>
//                       </a>
//                     </div>
//                   </div>
                
//                 </div>
//               </div>
//               <div class="product-preview__area-title">
//                 <div class="product-preview__title">
//                   <a href="product/product${i}.html">
//                     <p class="product-preview__label">${el.title}</p>
//                     <p class="product-preview__text">${el.text}</p>      
//                     <p class="product-preview__articul">${el.articul}</p>      
//                   </a>
//                 </div>
//               </div>
              
//             </div>
//           </form>

      
//         </div>
//       `;

//       badsWrap.insertAdjacentHTML("beforeend", postEl);
//     }
//   });
// }
// function viewSleepProducts(postsData, badsWrap) {


//   postsData.forEach((el, i) => {
//     if (el.category === 'sleep') {
//       const postEl = `
//         <div id="${el.id}" class="product-preview-elem ">
//           <form
//             action="/cart_items"
//             method="post"
//             data-product-id="248406913"
//             class="product-preview is-zero-count-preorder"
//           >
//             <div class="product-preview__content">
//               <div class="product-preview__area-photo">
//                 <div class="product-preview__photo">
//                   <div class="img-ratio img-fit">
//                     <div class="img-ratio__inner">
//                       <a
//                         href="product/product${i}.html"
//                       >
//                         <picture>
//                           <source
//                             media="(min-width:768px)"
//                             data-srcset="${el.imgPath}"
//                             type="image/webp"
//                             class="lazyload"
//                           />
//                           <source
//                             media="(max-width:767px)"
//                             data-srcset="${el.imgPath}"
//                             type="image/webp"
//                             class="lazyload"
//                           />
//                           <img
//                             src="${el.imgPath}"
//                             class="lazyload"
//                             alt="${el.title}"
//                           />
//                         </picture>
//                       </a>
//                     </div>
//                   </div>
                
//                 </div>
//               </div>
//               <div class="product-preview__area-title">
//                 <div class="product-preview__title">
//                   <a href="product/product${i}.html">
//                     <p class="product-preview__label">${el.title}</p>
//                     <p class="product-preview__text">${el.text}</p>      
//                     <p class="product-preview__articul">${el.articul}</p>      
//                   </a>
//                 </div>
//               </div>
              
//             </div>
//           </form>

      
//         </div>
//       `;

//       badsWrap.insertAdjacentHTML("beforeend", postEl);
//     }
//   });
// }
// function viewThinkProducts(postsData, badsWrap) {


//   postsData.forEach((el, i) => {
//     if (el.category === 'think') {
//       const postEl = `
//         <div id="${el.id}" class="product-preview-elem ">
//           <form
//             action="/cart_items"
//             method="post"
//             data-product-id="248406913"
//             class="product-preview is-zero-count-preorder"
//           >
//             <div class="product-preview__content">
//               <div class="product-preview__area-photo">
//                 <div class="product-preview__photo">
//                   <div class="img-ratio img-fit">
//                     <div class="img-ratio__inner">
//                       <a
//                         href="product/product${i}.html"
//                       >
//                         <picture>
//                           <source
//                             media="(min-width:768px)"
//                             data-srcset="${el.imgPath}"
//                             type="image/webp"
//                             class="lazyload"
//                           />
//                           <source
//                             media="(max-width:767px)"
//                             data-srcset="${el.imgPath}"
//                             type="image/webp"
//                             class="lazyload"
//                           />
//                           <img
//                             src="${el.imgPath}"
//                             class="lazyload"
//                             alt="${el.title}"
//                           />
//                         </picture>
//                       </a>
//                     </div>
//                   </div>
                
//                 </div>
//               </div>
//               <div class="product-preview__area-title">
//                 <div class="product-preview__title">
//                   <a href="product/product${i}.html">
//                     <p class="product-preview__label">${el.title}</p>
//                     <p class="product-preview__text">${el.text}</p>      
//                     <p class="product-preview__articul">${el.articul}</p>      
//                   </a>
//                 </div>
//               </div>
              
//             </div>
//           </form>

      
//         </div>
//       `;

//       badsWrap.insertAdjacentHTML("beforeend", postEl);
//     }
//   });
// }
// function viewImmunityProducts(postsData, badsWrap) {


//   postsData.forEach((el, i) => {
//     if (el.category === 'immunity') {
//       const postEl = `
//         <div id="${el.id}" class="product-preview-elem ">
//           <form
//             action="/cart_items"
//             method="post"
//             data-product-id="248406913"
//             class="product-preview is-zero-count-preorder"
//           >
//             <div class="product-preview__content">
//               <div class="product-preview__area-photo">
//                 <div class="product-preview__photo">
//                   <div class="img-ratio img-fit">
//                     <div class="img-ratio__inner">
//                       <a
//                         href="product/product${i}.html"
//                       >
//                         <picture>
//                           <source
//                             media="(min-width:768px)"
//                             data-srcset="${el.imgPath}"
//                             type="image/webp"
//                             class="lazyload"
//                           />
//                           <source
//                             media="(max-width:767px)"
//                             data-srcset="${el.imgPath}"
//                             type="image/webp"
//                             class="lazyload"
//                           />
//                           <img
//                             src="${el.imgPath}"
//                             class="lazyload"
//                             alt="${el.title}"
//                           />
//                         </picture>
//                       </a>
//                     </div>
//                   </div>
                
//                 </div>
//               </div>
//               <div class="product-preview__area-title">
//                 <div class="product-preview__title">
//                   <a href="product/product${i}.html">
//                     <p class="product-preview__label">${el.title}</p>
//                     <p class="product-preview__text">${el.text}</p>      
//                     <p class="product-preview__articul">${el.articul}</p>      
//                   </a>
//                 </div>
//               </div>
              
//             </div>
//           </form>

      
//         </div>
//       `;

//       badsWrap.insertAdjacentHTML("beforeend", postEl);
//     }
//   });
// }

// function viewOtherProducts(postsData) {


//   postsData.forEach((el, i) => {
//     if (el.category === 'other') {
//       const postEl = `
//         <div id="${el.id}" class="product-preview-elem ">
//           <form
//             action="/cart_items"
//             method="post"
//             data-product-id="248406913"
//             class="product-preview is-zero-count-preorder"
//           >
//             <div class="product-preview__content">
//               <div class="product-preview__area-photo">
//                 <div class="product-preview__photo">
//                   <div class="img-ratio img-fit">
//                     <div class="img-ratio__inner">
//                       <a
//                         href="product/product${i}.html"
//                       >
//                         <picture>
//                           <source
//                             media="(min-width:768px)"
//                             data-srcset="${el.imgPath}"
//                             type="image/webp"
//                             class="lazyload"
//                           />
//                           <source
//                             media="(max-width:767px)"
//                             data-srcset="${el.imgPath}"
//                             type="image/webp"
//                             class="lazyload"
//                           />
//                           <img
//                             src="${el.imgPath}"
//                             class="lazyload"
//                             alt="${el.title}"
//                           />
//                         </picture>
//                       </a>
//                     </div>
//                   </div>
                
//                 </div>
//               </div>
//               <div class="product-preview__area-title">
//                 <div class="product-preview__title">
//                   <a href="product/product${i}.html">
//                     <p class="product-preview__label">${el.title}</p>
//                     <p class="product-preview__text">${el.text}</p>      
//                     <p class="product-preview__articul">${el.articul}</p>      
//                   </a>
//                 </div>
//               </div>
              
//             </div>
//           </form>

      
//         </div>
//       `;

//       badsWrap.insertAdjacentHTML("beforeend", postEl);
//     }
//   });
// }


// function addButtonClickToJson(buttonNumber) {
//   // Проверяем, есть ли уже объект в локальном хранилище
//   let json = localStorage.getItem('buttonClicks');
//   let buttonClicks = [];
//   if (json) {
//     buttonClicks = JSON.parse(json);
//   }


//   buttonClicks = [];
//   // Добавляем новое значение
//   buttonClicks.unshift(buttonNumber);

//   // Сохраняем обновленный объект в локальном хранилище
//   localStorage.setItem('buttonClicks', JSON.stringify(buttonClicks));
// }

viewProducts();


