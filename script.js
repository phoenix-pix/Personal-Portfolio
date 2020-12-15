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

// Remove/add typewriter effect on window width change //
if($(window).width() > 690) {
        $('#t1').addClass('typewriter anim-typewriter');
        $('#t2').addClass('typewriter2 anim-typewriter2');
    }else{
        $('#t2').removeClass('typewriter anim-typewriter typewriter2 anim-typewriter2');
    }