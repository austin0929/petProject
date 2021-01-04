$(document).ready(function () {
  $('.switch-img1').on('click', function () {
    $('.switch-img1-big').show();
    $('.switch-img2-big').hide();
    $('.switch-img3-big').hide();
    $('.switch-img4-big').hide();
  });
});
$('.switch-img2').on('click', function () {
  $('.switch-img2-big').show();
  $('.switch-img1-big').hide();
  $('.switch-img3-big').hide();
  $('.switch-img4-big').hide();
});
$('.switch-img3').on('click', function () {
  $('.switch-img3-big').show();
  $('.switch-img2-big').hide();
  $('.switch-img1-big').hide();
  $('.switch-img4-big').hide();
});
$('.switch-img4').on('click', function () {
  $('.switch-img4-big').show();
  $('.switch-img2-big').hide();
  $('.switch-img1-big').hide();
  $('.switch-img3-big').hide();
});
$('.step-btn1').on("click", function () { 
  $(".reserveModal").hide();
});
$('.step-btn2').on("click", function () {
  $(".reserve2Modal").hide();
});
$('.step-btn3').on("click", function () {
  $(".reserve3Modal").hide();
});
  $(function () {
        var dateFormat = "mm/dd/yy",
          from = $("#from")
            .datepicker({
    defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 1
            })
            .on("change", function () {
    to.datepicker("option", "minDate", getDate(this));
            }),
          to = $("#to").datepicker({
    defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
          })
            .on("change", function () {
    from.datepicker("option", "maxDate", getDate(this));
            });

        function getDate(element) {
          var date;
          try {
    date = $.datepicker.parseDate(dateFormat, element.value);
          } catch (error) {
    date = null;
          }

          return date;
        }
      });
    
var mySwiper = new Swiper(".swiper-container", {

  derection: "horizonral",
  //速度
  loop: true,
  //是否重複播放
  speed: 1200,
  
  slidesPerView: 3,

  slidesPerGroup: 1,
  //If we need Auto Play
  autoplay: {
    delay: 3000
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

