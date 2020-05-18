document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal'),
    modalBtn = document.querySelectorAll('[data-toggle="modal"]'),
    closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(item => {
    item.addEventListener('click', (event) => {
      if(event.target === item) {
        switchModal();
      }
    });
  });
  modal.addEventListener('click', (event)=> {
    const target = event.target;
    if(target === closeBtn) {
      switchModal();
    }
    if(target === modal) {
      switchModal();
    }
  });
  document.addEventListener('keydown', (event)=> {
    if(event.key === 'Escape') {
      modal.classList.remove('modal--visible');
    }
  });
});

// $(document).ready(function () {
//   var modal = $('.modal'),
//       modalBtn = $('[data-toggle=modal]'),
//       closeBtn = $('.modal__close');
//   modalBtn.on('click', function () {
//     modal.toggleClass('modal--visible')
//   });
//   closeBtn.on('click', function () {
//     modal.toggleClass('modal--visible');
//   });
//   var mySwiper = new Swiper ('.swiper-container', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   })
//   var next = $('.swiper-button-next');
//   var prev = $('.swiper-button-prev');
//   var bullets = $('.swiper-pagination');

//   next.css('left', prev.width() + 23 + bullets.width() + 23)
//   bullets.css('left', prev.width() + 22)
// });

// (function(jq) {
//   jq.autoScroll = function(ops) {
//     ops = ops || {};
//     ops.styleClass = ops.styleClass || 'button-up';
//     var t = jq('<div class="'+ops.styleClass+'"></div>'),
//    d = jq(ops.target || document);
//    jq(ops.container || 'body').append(t);
 
//   t.css({
//     opacity: 0,
//     position: 'absolute',
//     top: 0,
//     right: 0
//  }).on('click', function() {
// 	 jq('html,body').animate({
// 	    scrollTop: 0
//    }, ops.scrollDuration || 1000);
//  });
 
//   d.scroll(function() {
//     var sv = d.scrollTop();
//     if (sv < 300) {
//       t.clearQueue().fadeOut(ops.hideDuration || 200);
// 	 return;
//   }
 
//   t.css('display', '').clearQueue().animate({
//    top: sv,
//    opacity: 0.8
//    }, ops.showDuration || 500);
//   });
//   };
// })(jQuery);
 
// $(document).ready(function(){
//  $.autoScroll({
//  scrollDuration: 600, 
//  showDuration: 600, 
//  hideDuration: 300
//  });

//   new WOW().init();

// });