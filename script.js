// When the user scrolls the page, execute scrollbar
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}

// Contact Modal //
var modalBtn = document.querySelector('.contact-redirect');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active')
});

modalClose.addEventListener('click',function(){
  modalBg.classList.remove('bg-active')
});
