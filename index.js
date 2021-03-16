const fruits = [
  {id: 1, title: 'Apples', price: 20},
  {id: 2, title: 'Oranges', price: 30},
  {id: 3, title: 'Mango', price: 40},
];

const $content = document.querySelector('#content');

if (fruits.length) {

  $content.insertAdjacentHTML('afterbegin', `<div class="row"></div>`);

  const $row = $content.querySelector('.row');

  fruits.forEach(item => {
    const $col = document.createElement('div');
    $col.classList.add('col');
    const $card = document.createElement('div');
    $card.classList.add('card');
    $card.insertAdjacentHTML('afterbegin', `
		    <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <hr>
          <button class="btn btn-sm btn-primary" data-modal-show>Посмотреть цену</button>
          <button class="btn btn-sm btn-danger">Удалить</button>
        </div>
		`);
    $col.appendChild($card);

    $row.appendChild($col);
  });


} else {
  $content.insertAdjacentHTML('afterbegin', `<p class="text-muted">Нет данных для отображения</p>`);
}

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
      type: 'btn-primary',
      handler() {

      }
    },
    {
      text: 'Cancel',
      type: 'btn-secondary',
      handler() {
        console.log(this);
      }
    }
  ]
});

const $btnsShowModal = document.querySelectorAll('[data-modal-show]');

$btnsShowModal.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.open();
  });
});
