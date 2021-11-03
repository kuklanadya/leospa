document.addEventListener('DOMContentLoaded', function () {
   $('#header a:first').addClass('active');

   //sticky header
   let scrollPos = $(this).scrollTop();
   checkScroll(scrollPos);

   $(window).on("scroll", function () {
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos);
   });

   function checkScroll(scrollPos) {
      if (scrollPos > 90) {
         $('#header').addClass("fixed");
      } else {
         $('#header').removeClass("fixed");
      }
   };

   //smooth srcoll, nav
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();
      let elementID = $(this).data('scroll');
      let elementOffset = $(elementID).offset().top;

      //$("#nav a").removeClass('active');
      // $(this).addClass('active');

      $("#nav").removeClass('open');
      $('.burger').removeClass('active');
      $('#header').removeClass("white");

      $("html, body").animate({
         scrollTop: elementOffset - 20
      }, 700);
   })

   window.addEventListener('scroll', () => {
      document.querySelectorAll('.scroll').forEach((el, i) => {
         if (el.offsetTop - 100 <= scrollPos) {
            document.querySelectorAll('#nav a').forEach((el) => {
               if (el.classList.contains('active')) {
                  el.classList.remove('active');
               }
            });
            document.querySelectorAll('#header a')[i].classList.add('active');
         }
      });
   });

   //burger
   $('.burger').on('click', function () {
      $('#header').addClass("white");
      $(this).toggleClass('active');
      $('#nav').toggleClass('open');
      if (!$('#nav').hasClass('open')) {
         $('#header').removeClass("white");
      }
   })

   //close menu by click on the page
   $('main').on('click', function () {
      $('#nav').removeClass('open');
      $('.burger').removeClass('active');
      $('#header').removeClass("white");
   });

   $('.video-popup').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      callbacks: {

         open: function () {
            $('body').css('overflow', 'hidden');
         },

         close: function () {
            $('body').css('overflow', '');
         },

      },
   });

   //slick slider
   $('.slider').slick({
      draggable: false,
      infinity: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               draggable: true,
               slidesToShow: 1
            }
         }
      ]
   });

   $('.quotes__slider').slick({
      draggable: false,
      infinity: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 7000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               draggable: true,
               slidesToShow: 1
            }
         }
      ]
   })
});