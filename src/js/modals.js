const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal-close')

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

let closeModals = () => {
	modalOverlay.classList.remove('modal-overlay--visible');
	modals.forEach((el) => {
		el.classList.remove('modal--visible');
	});
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