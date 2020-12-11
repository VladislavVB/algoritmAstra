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

let openModal_1 = () => {
    document.querySelector('.modal-img-first').classList.add('modal-img-one-visible');
}

let closeModal_1 = () => {
    document.querySelector('.modal-img-first').classList.remove('modal-img-one-visible');
    
}

// let closeModalBlack_1 = () => {
//     document.querySelector('.modal-img-one').classList.remove('modal-img-one-visible');
    
// }
let openModal_2 = () => {
    document.querySelector('.modal-img-two').classList.add('modal-img-one-visible');
}

let closeModal_2 = () => {
    document.querySelector('.modal-img-two').classList.remove('modal-img-one-visible');
    
}

// let closeModalBlack_2 = () => {
//     document.querySelector('.modal-img-two').classList.remove('modal-img-one-visible');
    
// }

let openModal_3 = () => {
    document.querySelector('.modal-img-three').classList.add('modal-img-one-visible');
}

let closeModal_3 = () => {
    document.querySelector('.modal-img-three').classList.remove('modal-img-one-visible');
    
}

// let closeModalBlack_3 = () => {
//     document.querySelector('.modal-img-three').classList.remove('modal-img-one-visible');
    
// }

let openModal_4 = () => {
    document.querySelector('.modal-img-four').classList.add('modal-img-one-visible');
}

let closeModal_4 = () => {
    document.querySelector('.modal-img-four').classList.remove('modal-img-one-visible');
    
}

// let closeModalBlack_4 = () => {
//     document.querySelector('.modal-img-four').classList.remove('modal-img-one-visible');
    
// }

let openModal_5 = () => {
    document.querySelector('.modal-img-five').classList.add('modal-img-one-visible');
}

let closeModal_5 = () => {
    document.querySelector('.modal-img-five').classList.remove('modal-img-one-visible');
    
}

// let closeModalBlack_5 = () => {
//     document.querySelector('.modal-img-five').classList.remove('modal-img-one-visible');
    
// }

let openModal_6 = () => {
    document.querySelector('.modal-img-six').classList.add('modal-img-one-visible');
}

let closeModal_6 = () => {
    document.querySelector('.modal-img-six').classList.remove('modal-img-one-visible');
    
}

// let closeModalBlack_6 = () => {
//     document.querySelector('.modal-img-six').classList.remove('modal-img-one-visible');
    
// }

let openModal_7 = () => {
    document.querySelector('.modal-img-seven').classList.add('modal-img-one-visible');
}

let closeModal_7 = () => {
    document.querySelector('.modal-img-seven').classList.remove('modal-img-one-visible');
    
}

// let closeModalBlack_7 = () => {
//     document.querySelector('.modal-img-seven').classList.remove('modal-img-one-visible');
    
// }

let openModal_8 = () => {
    document.querySelector('.modal-img-eight').classList.add('modal-img-one-visible');
}

let closeModal_8 = () => {
    document.querySelector('.modal-img-eight').classList.remove('modal-img-one-visible');
    
}

// let closeModalBlack_8 = () => {
//     document.querySelector('.modal-img-eight').classList.remove('modal-img-one-visible');
    
// }


