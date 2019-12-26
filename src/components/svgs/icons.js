const icons = (function() {

  /**
   * Source but has slight modifications: https://codepen.io/eltonmesquita/post/loading-inline-svg
   * Note: Just for this site, having a backend can easily load in html directly without this workaround.
   * And yes I know about using <object></object> but that method prevents styling on svg
   */ 
  function loadSvg(target, url) {
    if (typeof SVGRect != 'undefined') {
      // Request the SVG file
      var ajax = new XMLHttpRequest();
      ajax.open('GET', url, true);
      ajax.send();
  
      // Append the SVG to the target
      ajax.onload = () => {
        target.innerHTML = ajax.responseText;
      }
    }
  }

  function init() {
    document.querySelectorAll('.icon-sec .icon-card-wrapper .card .icon').forEach((el) => {
      loadSvg(el, el.getAttribute('data-source'));
    });
  }

  return {
    init,
  };
}());

export default icons;