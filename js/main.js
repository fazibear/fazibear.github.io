---
layout: null
---
document.querySelectorAll('a.blog-button').forEach(function(button, i){
  panelCover = function(){
    return document.querySelectorAll('.panel-cover')[0];
  }
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

document.querySelectorAll('.btn-mobile-menu').forEach(function(button, i){
  button.addEventListener("click", function(e) {
    document.querySelectorAll('.navigation-wrapper')[0].classList.toggle('visible');
    document.querySelectorAll('.navigation-wrapper')[0].classList.toggle('animated');
    document.querySelectorAll('.navigation-wrapper')[0].classList.toggle('bounceInDown');
    document.querySelectorAll('.btn-mobile-menu__icon')[0].classList.toggle('icon-list');
    document.querySelectorAll('.btn-mobile-menu__icon')[0].classList.toggle('icon-x-circle');
    document.querySelectorAll('.btn-mobile-menu__icon')[0].classList.toggle('animated');
    document.querySelectorAll('.btn-mobile-menu__icon')[0].classList.toggle('fadeIn');
  });
});

document.querySelectorAll('.navigation-wrapper .blog-button').forEach(function(button, i){
  button.addEventListener("click", function(e) {
    document.querySelectorAll('.navigation-wrapper')[0].classList.toggle('visible');
    document.querySelectorAll('.btn-mobile-menu__icon')[0].classList.toggle('icon-list');
    document.querySelectorAll('.btn-mobile-menu__icon')[0].classList.toggle('icon-x-circle');
    document.querySelectorAll('.btn-mobile-menu__icon')[0].classList.toggle('animated');
    document.querySelectorAll('.btn-mobile-menu__icon')[0].classList.toggle('fadeIn');
  });
});
