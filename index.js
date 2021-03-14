const modal = $.modal();

const $btnsShowModal = document.querySelectorAll('.action-modal');

document.addEventListener('click', () => {
	modal.open();
});