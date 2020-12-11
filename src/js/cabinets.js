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
    document.querySelectorAll('.сabinets-tab').forEach(element => {
        element.classList.toggle('сabinets-card-active', false);

    })

    document.querySelectorAll('.сabinets-tab')[index].classList.add('сabinets-card-active');
    document.querySelectorAll('.cabinets-item')[index].classList.add('cabinets-item-active');
    return false;
}

