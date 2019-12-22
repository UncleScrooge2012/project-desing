// document.addEventListener('DOMContentLoaded', function(event) {
//     const modal = document.querySelector('.modal')
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]')     
//     const closseBtn = document.querySelector('.modal__close')
//     const switchModal = () => {
//         modal.classList.toggle('modal--visible')
//     }
//     modalBtn.forEach(element => {
//         element.addEventListener('click', switchModal );

//     });

//     closseBtn.addEventListener('click', switchModal );
    
// });

toggleModal = () => {
    const modal = document.querySelector('.modal');
          modal.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('modal') && !target.classList.contains('modal__dialog')) {
              hideModal();
            }
          });
          hideModal = () => {
            modal.classList.remove('modal--visible');
          };
          document.onkeydown = function(evt) {
      
            if (evt.keyCode == 27) {
              modal.classList.remove('modal--visible');
            }
          };
  };
  toggleModal();


  $(document).ready(function(){
    $('body').append('<a href="#" class="scroll-up">листайте вверх</a>');
  });
  
  $(function() {
   $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "800") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
     if ($(window).scrollTop() <= "800") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
     $("html, body").animate({scrollTop: 0}, "slow")
    })
   }
  });
  
  $(function() {
   $(".scroll-up").scrollToTop();
  });


$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closseBtn = $('.modal__close');

        
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    closseBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
   
    var mySwiper = new Swiper ('.swiper-container', {      
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
      })

      var next = $('.swiper-button-next')
      var prev = $('.swiper-button-prev')
      var bullets = $('.swiper-pagination')
     
     
      next.css('left', prev.width() + 10 + bullets.width() + 10 )
      bullets.css('left', prev.width() + 10 )

      new WOW().init()
      
      
}); 