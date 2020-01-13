const tabs = (function() {
  function handleActive() {
    document.querySelectorAll('.tab-wrapper').forEach((wrapper) => {
      wrapper.querySelectorAll('.tabs button').forEach((tab) => {
        tab.addEventListener('click', (event) => {
          const el = event.currentTarget;
          const dataId = el.getAttribute('data-id');
          const isActive = el.classList.contains('active');

          if (!isActive) {
            wrapper.querySelector('.tabs button.active').classList.remove('active');
            el.classList.add('active');

            wrapper.querySelector('.tab-content.active').classList.remove('active');
            wrapper.querySelector(`.tab-content[data-id="${dataId}"]`).classList.add('active');
          }
        });
      });
    });
  }

  function init() {
    handleActive();
  }

  return {
    init,
  };
}());

export default tabs;