function _createModal(options) {
	const modal = document.createElement('div');
	const DEFAULT_WIDTH = '600px';

	modal.classList.add('smodal');
	modal.insertAdjacentHTML('afterbegin', `
	<div class="smodal-overlay" data-close="true">
    <div class="smodal-container" style="width: ${options.width || DEFAULT_WIDTH}">
      <div class="smodal__header">
        <div class="smodal__header-title">
          ${options.title || 'Modal'}
        </div>
        ${options.closable ? `<span class="smodal-close" data-close="true"><span class="s-icon-cross"></span></span>` : ''}
      </div>
      <div class="smodal__body">
        ${options.content || ''}
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
	const ANIMATION_SPEED = 200;
	const $modal = _createModal(options);
	let closing = false;
	let destroyed = false;

	const modalObj = {
		open() {
			if (destroyed) {
				return console.log('Modal is destroyed');
			}
			!closing && $modal.classList.add('open');
		},
		close() {
			closing = true;
			$modal.classList.remove('open');
			$modal.classList.add('hide');
			setTimeout(() => {
				$modal.classList.remove('hide');
				closing = false;
			}, ANIMATION_SPEED);
		}
	}

	const $modalCloseElements = $modal.querySelectorAll('[data-close]');

	const listener = () => {
		modalObj.close();
	};

	$modalCloseElements.forEach((el) => {
		el.addEventListener('click', listener);
	});

	// $modal.addEventListener('click', (event) =>{
	// 	console.log(event.target.dataset.close);
	// 	if (event.target.dataset.close) {
	// 		modalObj.close();
	// 	}
	// });

	return Object.assign(modalObj, {
		destroy() {
			$modal.parentNode.removeChild($modal);
			$modalCloseElements.forEach((el) => {
				el.removeEventListener('click', listener);
			});
			destroyed = true;
		}
	});
};
