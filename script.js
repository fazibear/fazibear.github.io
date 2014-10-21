window.addEventListener("load", function(){
  var pl = document.getElementById('pl');
  var en = document.getElementById('en');

  var plLink = document.getElementById('pl-link');
  var enLink = document.getElementById('en-link');

  plLink.addEventListener("click", function(evt){
    console.log('asd')
    en.style.display = 'none';
    pl.style.display = 'block';
    evt.preventDefault();
  });

  enLink.addEventListener("click", function(evt){
    pl.style.display = 'none';
    en.style.display = 'block';
    evt.preventDefault();
  });
});
