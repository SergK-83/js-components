const fruits = [
  {id: 1, title: 'Apples', price: 20},
  {id: 2, title: 'Oranges', price: 30},
  {id: 3, title: 'Mango', price: 40},
];

const toHTML = item => `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <hr>
        <button class="btn btn-sm btn-primary" data-modal-show="price" data-id="${item.id}">Посмотреть цену</button>
        <button class="btn btn-sm btn-danger" data-modal-show="remove" data-id="${item.id}">Удалить</button>
      </div>
    </div>
  </div>
`;

function render() {
  const $content = document.querySelector('#content');

  if (fruits.length) {
    // const html = fruits.map(item => toHTML(item));
    const html = fruits.map(toHTML).join('');
    $content.innerHTML = html;

  } else {
    $content.innerHTML = `<p class="text-muted">Нет данных для отображения</p>`;
  }
}

render();

const modalPrice = $.modal({
  title: 'Product price',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Ok',
      type: 'btn-secondary',
      handler() {
        modalPrice.close();
      }
    }
  ]
});

document.addEventListener('click', event => {
  event.preventDefault();
  const btnType = event.target.dataset.modalShow;
  const productId = +event.target.dataset.id;
  const product = fruits.find(item => item.id === productId);

  if (btnType === 'price') {
    const html = `
      <h5>${product.title}</h5>
      <p class="text-muted">Price <span class="text-primary">${product.price}$</span></p>
    `;

    modalPrice.setContent(html);
    modalPrice.open();
  }

  if (btnType === 'remove') {
    $.confirm({
      title: 'Product removing',
      content: `<p class="text-muted">Are you sure you want to remove the  <span class="text-primary">${product.title}</span> product?</p>`
    }).then(() => {
      console.log('Remove');
    }).catch(() => {
      console.log('Cancel');
    });
  }
});
