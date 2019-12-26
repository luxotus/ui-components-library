const alert = (function(){
  function handleCloseAlertBtn() {
    document.querySelectorAll('.alert .close-alert').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.currentTarget.parentElement.remove();
      });
    });
  }

  function init() {
    handleCloseAlertBtn();
  }

  return {
    init,
  }
}());

export default alert;