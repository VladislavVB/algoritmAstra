const buttomMobileMenu = document.querySelector('.btn_mobile');
const navigationMenu = document.querySelector('.menu-items');
buttomMobileMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
})

const closeBurgerMenu = document.querySelector('.menu-items');

closeBurgerMenu.addEventListener('click', () => {
  closeBurgerMenu.classList.toggle('active');
})

//смотреть еще
let cupboardHiddenAllBtn = (num) => {
  document.querySelector(`.button-tabs-more${num}`);

}

let cupboardHiddenAll = (num) => {
  if (document.querySelectorAll(`.cupboard-card-hidden${num}`).length > 0) {
    document.querySelectorAll(`.cupboard-card-hidden${num}`).forEach(elem => {
      elem.classList.remove(`cupboard-card-hidden${num}`);
    })
  } else {
    document.querySelectorAll(`cupboard-card-hidden-visible${num}`).forEach(elem => {
      elem.classList.add(`cupboard-card-hidden${num}`);
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

