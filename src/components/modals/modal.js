import hljs from 'highlight.js';

const modal = (function() {
  function handleOverlayClick() {
    document.querySelector('.general-modal-overlay').addEventListener('click', (event) => {
      const targetEl = event.target;

      if (targetEl.classList.contains('general-modal-overlay')) {
        targetEl.classList.add('hide');
      }
    });
  }

  function handleViewCodeClick() {
    document.querySelectorAll('.view-code button').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const overlay = document.querySelector('.general-modal-overlay');

        if (overlay.classList.contains('hide')) {
          overlay.classList.remove('hide');
          displayHTML(event);
        }
      });
    })
  }

  function handleTabClick() {
    document.querySelectorAll('.general-modal .tabs button').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        if (!event.target.classList.contains('active')) {
          document.querySelector('.general-modal .tabs button.active').classList.remove('active');
          event.currentTarget.classList.add('active');

          const query = `.general-modal .tab-content[data-type="${event.currentTarget.getAttribute('data-type')}"]`;

          if (document.querySelector(query).classList.contains('hide')) {
            document.querySelectorAll('.general-modal .tab-content:not(.hide)').forEach((tab) => {
              tab.classList.add('hide');
            });
            document.querySelector(query).classList.remove('hide');
          }
        }
      });
    })
  }

  function displayHTML(event) {
    const query = event.currentTarget.getAttribute('data-target');
    const el = event.target.parentElement.parentElement.querySelector(query);

    document.querySelector('.general-modal .code-wrapper .html').innerHTML = '';
    document.querySelector('.general-modal .code-wrapper .html').appendChild(document.createTextNode(el.outerHTML));
    reloadCode();
  }

  function reloadCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  function init() {
    hljs.initHighlightingOnLoad();
    handleOverlayClick();
    handleViewCodeClick();
    handleTabClick();
  }

  return {
    init,
  };
}());

export default modal;