const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal-close')
const picturesPath = ['http://127.0.0.1:5501/src/img/reviews/1.png', 'http://127.0.0.1:5501/src/img/reviews/2.png', 'http://127.0.0.1:5501/src/img/reviews/3.png', 'http://127.0.0.1:5501/src/img/reviews/4.png', 'http://127.0.0.1:5501/src/img/reviews/1.png', 'http://127.0.0.1:5501/src/img/reviews/3.png'];
let currentPath ;

const picturesShow = (num) => {
	// console.log(num);
	currentPath = num;
	document.querySelector('.reviews-show-img').src = picturesPath[num];
	picturesSlide(num);
}

const picturesSlide = (action) => {
	
	switch (action) {
		case 'next':
			if (currentPath >= picturesPath.length -1) {
				currentPath = -1;
			}
			document.querySelector('.reviews-show-img').src = picturesPath[currentPath + 1] ;
			currentPath++;
		break;
		case 'prev':
			if (currentPath === 0) {
				currentPath = picturesPath.length;
			}
			document.querySelector('.reviews-show-img').src = picturesPath[currentPath - 1] ;
			currentPath--;
		break;
	}
}


btns.forEach((el, i) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
		document.querySelector('body').style.overflow='hidden';
		
	});
});

let closeModals = () => {
	modalOverlay.classList.remove('modal-overlay--visible');
	modals.forEach((el) => {
		el.classList.remove('modal--visible');
	});
	document.querySelector('body').style.overflow='auto';
}


modalOverlay.addEventListener('click', (e) => {
	modalClose.forEach(res => {
		if (res == e.target) {
			closeModals()
		}
	})
	if (e.target == modalOverlay) {
		closeModals()
	}
});

