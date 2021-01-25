let swiper1 = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swiper2 = new Swiper('.swiper-container2', {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  breakpoints: {
    575: {
        slidesPerView: 4,
        spaceBetween: 30
    },
    100: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

let galleryThumbs3 = new Swiper('.gallery-thumbs3', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

let galleryTop3 = new Swiper('.gallery-top3', {
  spaceBetween: 10,
  
  thumbs: {
    swiper: galleryThumbs
  }
});

// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
// var galleryTop = new Swiper('.gallery-top', {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: galleryThumbs
//   }
// });