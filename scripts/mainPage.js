

const scroller = scrollama();

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step"
  })
  .onStepEnter(response => {
    $('.step').addClass('showblock');

  })
  .onStepExit(response => {
    // { element, index, direction }
  });



var intViewportHeight = window.innerHeight;



jQuery(function($) {

    const section = $('.block'),
          nav = $('.nav__menu'),
          navHeight = nav.outerHeight(); // получаем высоту навигации 

    // поворот экрана 
    window.addEventListener('orientationchange', function () {
      navHeight = nav.outerHeight();
    }, false);
    $(window).on('scroll', function () {
        const position = $(this).scrollTop();
        section.each(function () {
            const top = $(this).offset().top - navHeight - 5,
                  bottom = top + $(this).outerHeight();
            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active');
                section.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

       $(".nav__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $(".arrow__next-block").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});



$(document).ready(function(){
  $('.b-partner__slick').slick({
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    autoplay: false,
     customPaging : function(slider, i) {
                  return '<div class="dot"></div>';
                  },
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1169,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
$('.b-reviews__slick').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  autoplay: false,
   customPaging : function(slider, i) {
                return '<div class="dot"></div>';
                },
  autoplaySpeed: 2000,
  responsive: [
      
      {
      breakpoint: 979,
      settings: {
                slidesToShow: 1,
            }
    }
  
  ]
});
});
// setup resize event
window.addEventListener("resize", scroller.resize);


 ymaps.ready(function () {
    var myMapMoscow = new ymaps.Map("YMapsIDMoscow", {
      center: [55.750624, 37.537469],
      zoom: 14
    });

    var myMapArchangelsk = new ymaps.Map("YMapsIDArch",{
      center: [64.547330, 40.519795],
      zoom: 14
    });

var myPlacemarkArch = new ymaps.Placemark([64.547466, 40.519698],{
  balloonContentBody: 'Мы работам с понедельника по пятницу, с 9 утра до 6 вечера.',
}, {
    // Балун открывается, метка при этом не закрывается
    hideIconOnBalloonOpen: false,
    iconOffset: [0, 25]
});

var myPlacemark = new ymaps.Placemark([55.750624, 37.537469], {
    balloonContentBody: 'Мы работам с понедельника по пятницу, с 9 утра до 6 вечера.',
 }, {
    hideIconOnBalloonOpen: false,
    iconOffset: [0, 25]
});


myMapMoscow.geoObjects.add(myPlacemark);
myMapArchangelsk.geoObjects.add(myPlacemarkArch);
});



