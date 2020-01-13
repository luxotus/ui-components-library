const progressBar = (function() {
  function setCurrentProgress(selector, value, total) {
    const percentage = (value / total) * 100;
    document.querySelector(selector).querySelector('.bar').style.width = `${percentage}%`;
  }

  function init() {
    // Example
    setCurrentProgress('#progress-bar-01', 33, 100);
  }

  return {
    init,
  };
}());

export default progressBar;