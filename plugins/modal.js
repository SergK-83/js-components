function _createModal(options) {
	const modal = document.createElement('div');

	modal.classList.add('smodal');
	modal.insertAdjacentHTML('afterbegin', `
	<div class="smodal-overlay">
    <div class="smodal-container">
      <div class="smodal__header">
        <div class="smodal__header-title">
          Modal title
        </div>
        <span class="smodal-close"><span class="s-icon-cross"></span></span>
      </div>
      <div class="smodal__body">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div class="smodal__footer text-end">
        <button class="btn btn-primary">Ok</button>
        <button class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
	`);
	document.body.appendChild(modal);
	return modal;
}

$.modal = function (options) {
	const $modal = _createModal(options);

	return {
		open() {
			$modal.classList.add('open');
		},
		close() {
			$modal.classList.remove('open');
		},
		destroy() {
		}
	}
};
