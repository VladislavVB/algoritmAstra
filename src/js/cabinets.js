let onСabinetsClick = (index, event) => {
    
    event.stopPropagation();
    // document.querySelector('.visible').classList.item()
    // console.log(document.querySelector('.visible').classList);
    // document.querySelectorAll('.people-link')[index].classList.item(1)
    if (document.querySelectorAll('.cabinets-item')[index].classList.item(1) === 'cabinets-item-active') {
        return false;
    }

    document.querySelectorAll('.cabinets-item').forEach(element => {
        element.classList.toggle('cabinets-item-active', false);

    }) 
    document.querySelectorAll('.cabinets-tab').forEach(element => {
        element.classList.toggle('cabinets-card-active', false);

    })
    
    document.querySelectorAll('.cabinets-tab')[index].classList.add('cabinets-card-active');
    document.querySelectorAll('.cabinets-item')[index].classList.add('cabinets-item-active');  cabinets-card-active
    return false;
}

// let onKitchetClick = (index, event) => {
    
//     event.stopPropagation();
//     // document.querySelector('.visible').classList.item()
//     // console.log(document.querySelector('.visible').classList);
//     // document.querySelectorAll('.people-link')[index].classList.item(1)
//     if (document.querySelectorAll('.tabs-item')[index].classList.item(1) === 'tabs-item-active') {
//         return false;
//     }

//     document.querySelectorAll('.tabs-item').forEach(element => {
//         element.classList.toggle('tabs-item-active', false);

//     })
//     document.querySelectorAll('.kitchen-tab').forEach(element => {
//         element.classList.toggle('kitchen-card-active', false);

//     })

//     document.querySelectorAll('.kitchen-tab')[index].classList.add('kitchen-card-active');
//     document.querySelectorAll('.tabs-item')[index].classList.add('tabs-item-active');
//     return false;
// }
