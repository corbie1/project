$(".b-questions__button").click(function () {
  menuPopup.open();
});

var menuPopup = new Popup(".popup1");

var closeButton = document.querySelector(".popup__close");
closeButton.addEventListener("click", function () {
  menuPopup.close();
});

var tels = document.querySelectorAll("input[type='tel']");
tels.forEach(function (tel) {
  var mask = new IMask(tel, {
    mask: [
      {
        mask: "8 (000) 000-00-00",
        startsWith: "8",
        lazy: true,
      },
      {
        mask: "+7 (000) 000-00-00",
        startsWith: "",
        lazy: true,
      },
    ],
    dispatch: function dispatch(appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, "");
      return dynamicMasked.compiledMasks.find(function (m) {
        return number.indexOf(m.startsWith) === 0;
      });
    },
  });
});

$(function () {
  $(".form__field input, textarea")
    .focus(function () {
      $(this)
        .parent(".form__field")
        .each(function () {
          $(".form__placeholder", this).addClass("focused");
        });
    })
    .blur(function () {
      if ($(this).val() == "") {
        $(this)
          .parent(".form__field")
          .each(function () {
            $(".form__placeholder", this).removeClass("focused");
          });
      }
    });
});
