const modal = $.modal({
	title: 'Modal title',
	closable: true,
	content: `
	<p>Modal is working</p>
	<p>Lorem ipsum dolor sit.</p>
	`,
	width: '400px',
	footerButtons: [
		{
			text: 'Ok',
			type: 'primary',
			handler() {

			}
		},
		{
			text: 'Cancel',
			type: 'secondary',
			handler() {

			}
		}
	]
});

const $btnsShowModal = document.querySelectorAll('.action-modal');

$btnsShowModal.forEach((btn) => {
	btn.addEventListener('click', () => {
		modal.open();
	});
});
