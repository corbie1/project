

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






$(document).ready(function(){

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


$('.b-questions__button').click(function(){
menuPopup.open();
});

var menuPopup = new Popup('.popup1');


var closeButton = document.querySelector('.popup__close');
closeButton.addEventListener('click', function() {
   menuPopup.close();
});


var tels = document.querySelectorAll("input[type='tel']");
tels.forEach(function (tel) {
  var mask = new IMask(tel, {
    mask: [{
      mask: '8 (000) 000-00-00',
      startsWith: '8',
      lazy: true
    }, {
      mask: '+7 (000) 000-00-00',
      startsWith: '',
      lazy: true
    }],
    dispatch: function dispatch(appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');
      return dynamicMasked.compiledMasks.find(function (m) {
        return number.indexOf(m.startsWith) === 0;
      });
    }
  });
});