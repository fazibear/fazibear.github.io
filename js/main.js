---
layout: null
---
var panelCover = function(){
  return document.querySelectorAll('.panel-cover')[0];
}

var toggle = function(selector, className){
  var el = document.querySelectorAll(selector)[0]
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}

var forEach = function(selector, fun){
  Array.prototype.forEach.call(document.querySelectorAll(selector), fun);
}

forEach('a.blog-button', function(button){
  button.addEventListener("click", function(e) {
    if(panelCover().classList.contains('panel-cover--collapsed')){
      return;
    }
    panelCover().classList.add('panel-cover--collapsed');
  });
});

if (window.location.pathname !== '/') {
  panelCover().classList.add('panel-cover--collapsed');
}

if (window.location.hash && window.location.hash == '#about') {
  panelCover().classList.add('panel-cover--collapsed');
}

forEach('.btn-mobile-menu', function(button){
  button.addEventListener("click", function(e) {
    toggle('.navigation-wrapper', 'visible');
    toggle('.navigation-wrapper', 'animated');
    toggle('.navigation-wrapper', 'bounceInDown');
    toggle('.btn-mobile-menu__icon', 'icon-list');
    toggle('.btn-mobile-menu__icon', 'icon-x-circle');
    toggle('.btn-mobile-menu__icon', 'animated');
    toggle('.btn-mobile-menu__icon', 'fadeIn');
  });
});

forEach('.navigation-wrapper .blog-button', function(button, i){
  button.addEventListener("click", function(e) {
    toggle('.navigation-wrapper', 'visible');
    toggle('.btn-mobile-menu__icon', 'icon-list');
    toggle('.btn-mobile-menu__icon', 'icon-x-circle');
    toggle('.btn-mobile-menu__icon', 'animated');
    toggle('.btn-mobile-menu__icon', 'fadeIn');
  });
});
