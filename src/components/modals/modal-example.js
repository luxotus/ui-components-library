const modal = (function() {
  function handleOverlayClick() {
    document.querySelector('.modal-overlay').addEventListener('click', (event) => {
      const targetEl = event.target;

      if (targetEl.classList.contains('modal-overlay')) {
        targetEl.classList.add('hide');
        document.querySelector('body').classList.remove('no-scroll');
      }
    });
  }

  function handleOpenClick(selector) {
    document.querySelectorAll(selector).forEach((btn) => {
      btn.addEventListener('click', () => {
        const overlay = document.querySelector('.modal-overlay');

        if (overlay.classList.contains('hide')) {
          overlay.classList.remove('hide');
          document.querySelector('body').classList.add('no-scroll');
        }
      });
    })
  }

  function handleCloseBtn() {
    document.querySelector('.modal header .close-btn').addEventListener('click', () => {
      document.querySelector('.modal-overlay').classList.add('hide');
      document.querySelector('body').classList.remove('no-scroll');
    });
  }

  function init() {
    handleOpenClick('.open-modal-btn'); // example
    handleOverlayClick();
    handleCloseBtn();
  }

  return {
    init,
  };
}());

export default modal;