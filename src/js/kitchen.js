let onKitchetClick = (index, event) => {
    
    event.stopPropagation();
    // document.querySelector('.visible').classList.item()
    // console.log(document.querySelector('.visible').classList);
    // document.querySelectorAll('.people-link')[index].classList.item(1)
    if (document.querySelectorAll('.tabs-item')[index].classList.item(1) === 'tabs-item-active') {
        return false;
    }

    document.querySelectorAll('.tabs-item').forEach(element => {
        element.classList.toggle('tabs-item-active', false);

    })
    document.querySelectorAll('.kitchen-tab').forEach(element => {
        element.classList.toggle('kitchen-card-active', false);

    })

    document.querySelectorAll('.kitchen-tab')[index].classList.add('kitchen-card-active');
    document.querySelectorAll('.tabs-item')[index].classList.add('tabs-item-active');
    return false;
}


// let closeModalBlack = () => {
//     document.querySelector('.modal-body ').classList.remove('modal-img-one-visible');
    
// }


//открытие картинок на весь экран при клике

// let openModal_1 = () => {
//     document.querySelector('.modal-img-first').classList.add('modal-img-one-visible');
// }

// let closeModal_1 = () => {
//     document.querySelector('.modal-img-first').classList.remove('modal-img-one-visible');
    
// }
// let closeModalBlack_1 = (event) => {
//     if(event.target.classList.value.indexOf('modal-img-one-content') != -1){
//         return;
//     }
    
//     document.querySelector('.modal-img-first').classList.remove('modal-img-one-visible');
// }
// let closeModalBlack_1 = () => {
//     document.querySelector('.modal-img-one').classList.remove('modal-img-one-visible');
    
// }

