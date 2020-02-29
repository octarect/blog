var getData = function(element, name, defaultValue) {
  if (typeof defaultValue == 'undefined') {
    defaultValue = null;
  }
  if (!!name) {
    var result = element.getAttribute('data-' + name);
    if (!!result) {
      return result;
    } else {
      return defaultValue;
    }
  } else {
    return null;
  }
};

var setData = function(element, name, value) {
  element.setAttribute('data-' + name, value);
};

var toggleMenu = function() {
  var q = getData(this, 'target');
  var menu = document.querySelector(q);
  if (!!menu) {
    var state = getData(this, 'toggle', 'off');
    if (state == 'off') {
      setData(this, 'toggle', 'on');
      menu.style.display = 'flex';
    } else {
      setData(this, 'toggle', 'off');
      menu.style.display = 'none';
    }
    return true;
  } else {
    return false;
  }
};

window.addEventListener('load', function() {
  var btnMenuToggle = document.querySelector('.site-menu-toggle');
  btnMenuToggle.addEventListener('click', toggleMenu);
});
