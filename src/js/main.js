const buttomMobileMenu = document.querySelector('.btn_mobile');
    const navigationMenu = document.querySelector('.menu-items');
    buttomMobileMenu.addEventListener('click', () => {
      navigationMenu.classList.toggle('active');
})

//открытие модалки
let openModal = () => {
    document.querySelector('.modal-body ').classList.add('modal-body-active');
}

let closeModal = () => {
    document.querySelector('.modal-body ').classList.remove('modal-body-active');
    
}

let closeModalBlack = (event) => {
    console.log(event.target.classList);
    if(event.target.classList.value.indexOf('form-element') != -1){
        return;
    }
    
    
    document.querySelector('.modal-body').classList.remove('modal-body-active');
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
