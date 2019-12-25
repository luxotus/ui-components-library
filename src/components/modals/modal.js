import hljs from 'highlight.js';

const modal = (function() {
  function handleOverlayClick() {
    document.querySelector('.general-modal-overlay').addEventListener('click', (event) => {
      const targetEl = event.target;

      if (targetEl.classList.contains('general-modal-overlay')) {
        targetEl.classList.add('hide');
        document.querySelector('body').classList.remove('no-scroll');
      }
    });
  }

  function handleCloseBtn() {
    document.querySelector('.general-modal header .close-btn').addEventListener('click', () => {
      document.querySelector('.general-modal-overlay').classList.add('hide');
      document.querySelector('body').classList.remove('no-scroll');
    });
  }

  function handleViewCodeClick() {
    document.querySelectorAll('.view-code button').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const overlay = document.querySelector('.general-modal-overlay');

        if (overlay.classList.contains('hide')) {
          overlay.classList.remove('hide');
          document.querySelector('body').classList.add('no-scroll');
          displayCode(event);
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

  function displayCode(event) {
    const query = event.currentTarget.getAttribute('data-target');
    const dataCSS = event.currentTarget.getAttribute('data-css');
    const el = event.target.parentElement.parentElement.querySelector(query);

    // Adding title to modal
    document.querySelector('.general-modal header h1').innerHTML = event.currentTarget.getAttribute('data-title');

    // Adding HTML to code section in modal
    document.querySelector('.general-modal .code-wrapper .html').innerHTML = '';
    document.querySelector('.general-modal .code-wrapper .html').appendChild(document.createTextNode(el.outerHTML));

    // Adding CSS to the code section in modal
    getCodeFromFile(dataCSS, (data) => {
      document.querySelector('.general-modal .code-wrapper .css').innerHTML = '';
      document.querySelector('.general-modal .code-wrapper .css').innerHTML = data;
      reloadCode();
    });
    reloadCode();
  }

  function reloadCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  function getCodeFromFile(sourceFile, callback) {
    fetch(sourceFile)
    .then(response => response.text())
    .then((data) => {
      callback(data);
    });
  }

  function init() {
    hljs.initHighlightingOnLoad();
    handleOverlayClick();
    handleViewCodeClick();
    handleTabClick();
    handleCloseBtn();
  }

  return {
    init,
  };
}());

export default modal;