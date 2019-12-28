const searchInput = (function() {
  function handleInputReset() {
    document.querySelectorAll('.search-wrapper .reset-input').forEach((resetBtn) => {
      resetBtn.addEventListener('click', (event) => {
        const inputEl = event.currentTarget.parentElement.querySelector('input[type="text"]');
        inputEl.value = '';
        inputEl.dispatchEvent(new Event('keyup'));
      });
    });
  }

  function handleInputTextChange() {
    document.querySelectorAll('.search-wrapper input[type="text"]').forEach((inputEl) => {
      inputEl.addEventListener('keyup', (event) => {
        const el = event.currentTarget;

        if (el.value !== '' && !el.classList.contains('has-text')) {
          el.classList.add('has-text');
        } else if (el.value === '' && el.classList.contains('has-text')) {
          el.classList.remove('has-text');
        }
      });
    });
  }

  function init() {
    handleInputTextChange();
    handleInputReset();
  }

  return {
    init,
  };
}());

export default searchInput;