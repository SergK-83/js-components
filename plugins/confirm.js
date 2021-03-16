$.confirm = function (options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      closable: false,
      content: options.content,
      width: '400px',
      footerButtons: [
        {
          text: 'Remove',
          type: 'btn-danger',
          handler() {
            modal.close();
            resolve();
          }
        },
        {
          text: 'Cancel',
          type: 'btn-secondary',
          handler() {
            modal.close();
            reject();
          }
        }
      ]
    });

    setTimeout(() => modal.open(), 100);
  });
};
