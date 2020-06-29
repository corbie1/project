

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