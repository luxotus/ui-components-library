const selectList = (function() {

  // Turns options in select into list
  function buildDropdown() {
    document.querySelectorAll('.custom-select').forEach((selectEl) => {
      const options = selectEl.querySelectorAll('select option');

      options.forEach((opt) => {
        const li = document.createElement('li');
        li.setAttribute('data-value', opt.value);
        li.innerText = opt.innerText;

        selectEl.querySelector('.select-dropdown').appendChild(li);
      });
    });
  }

  // Shows select dropdown
  function handleSelectClick() {
    document.querySelectorAll('.custom-select').forEach((selectEl) => {
      selectEl.addEventListener('click', (event) => {
        const el = event.target;

        if (el.classList.contains('custom-select')) {
          if (el.classList.contains('open')) {
            el.classList.remove('open');
          } else {
            el.classList.add('open');
          }
        }
      });

      selectEl.querySelector('.select-selected').addEventListener('click', () => {
        selectEl.click();
      });

      selectEl.querySelector('.arrow-icon').addEventListener('click', () => {
        selectEl.click();
      });
    });
  }

  // Updates select list and display the selected option
  function handleOptionClick() {
    document.querySelectorAll('.custom-select').forEach((selectEl) => {
      const el = selectEl.querySelectorAll('.select-dropdown li');

      el.forEach((li) => {
        li.addEventListener('click', (event) => {
          const el = event.target;
          selectEl.querySelector('select').value = el.getAttribute('data-value');
          selectEl.querySelector('.select-selected').innerText = el.innerText;

          selectEl.classList.remove('open');
        });
      });
    });
  }

  function init() {
    buildDropdown();
    handleSelectClick();
    handleOptionClick();
  }

  return {
    init,
  };
}());

export default selectList;