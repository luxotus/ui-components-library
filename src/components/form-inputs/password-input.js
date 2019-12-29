const passwordInput = (function() {
  function handleViewPassword() {
    document.querySelectorAll('.password-wrapper .view-eye').forEach((viewBtn) => {
      viewBtn.addEventListener('click', (event) => {
        const elBtn = event.currentTarget;
        const inputEl = elBtn.parentElement.querySelector('input');

        inputEl.setAttribute('type', inputEl.getAttribute('type') === 'password' ? 'text' : 'password');

        if (elBtn.classList.contains('show-password')) {
          elBtn.classList.remove('show-password');
        } else {
          elBtn.classList.add('show-password');
        }
      });
    });
  }

  function init() {
    handleViewPassword();
  }

  return {
    init,
  };
}());

export default passwordInput;