const buttomMobileMenu = document.querySelector('.btn_mobile');
const navigationMenu = document.querySelector('.menu-items');
buttomMobileMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
})

const closeBurgerMenu = document.querySelector('.menu-items');

closeBurgerMenu.addEventListener('click', () => {
  closeBurgerMenu.classList.toggle('active');
})

//смотреть еще cupboard
// let cupboardHiddenAllBtn = (num) => {
//   document.querySelector(`.button-tabs-more${num}`);
// }
let cupboardHiddenAll = (num) => {
  console.log(document.querySelectorAll(`.cupboard-card-hidden${num}`));
  if (document.querySelectorAll(`.cupboard-card-hidden${num}`).length > 0) {
    document.querySelectorAll(`.cupboard-card-hidden${num}`).forEach(elem => {
      elem.classList.remove(`cupboard-card-hidden${num}`);
    })
    document.querySelector(`.button-tabs-more${num}`).innerHTML='Закрыть';
  } else {
    document.querySelectorAll(`.card-cabinets-visible-now${num}`).forEach(elem => {
      console.log(elem);
      elem.classList.add(`cupboard-card-hidden${num}`);
      document.querySelector(`.button-tabs-more${num}`).innerHTML='Смотреть еще';
    })
  }
}

//смотреть еще kitchen
// let kitchenHiddenAllBtn = (num) => {
//   document.querySelector(`.button-kitchen-tabs-more${num}`);
// }
let kitchenHiddenAll = (num) => {
  console.log(document.querySelectorAll(`.kitchen-card-hidden${num}`));
  if (document.querySelectorAll(`.kitchen-card-hidden${num}`).length > 0) {
    document.querySelectorAll(`.kitchen-card-hidden${num}`).forEach(elem => {
      console.log(elem);
      elem.classList.remove(`kitchen-card-hidden${num}`);
    })
    document.querySelector(`.button-kitchen-tabs-more${num}`).innerHTML='Закрыть';
  } else {
    document.querySelectorAll(`.card-kitchen-visible-now${num}`).forEach(elem => {
      console.log(elem);
      elem.classList.add(`kitchen-card-hidden${num}`);
      document.querySelector(`.button-kitchen-tabs-more${num}`).innerHTML='Смотреть еще';
    })
  }
}


//плавный переход
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

