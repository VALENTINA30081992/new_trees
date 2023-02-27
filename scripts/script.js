$(".slides").slick({
  infinite: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow:
    '<button type="button" class="sliders__next"><img src="../images/icons/sliders_prev.svg" alt="prev" /></button>',
  prevArrow:
    '<button type="button" class="sliders__prev"><img src="../images/icons/sliders_prev.svg" alt="prev" /></button>',
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".reviews__body").slick({
  infinite: true,
  speed: 600,
  nextArrow:
    '<button type="button" class="reviews__next"><img src="../images/icons/reviews_prev.svg" alt="prev" /></button>',
  prevArrow:
    '<button type="button" class="reviews__prev"><img src="../images/icons/reviews_prev.svg" alt="prev" /></button>',
});

$("#menu").on("click", function () {
  $("ul.header__main-list__submenu").slideToggle("fast");
});

$(document).ready(function () {
  let $window = $(window),
    $target = $(".header__wrapper-top .dropdown"),
    $topPosition = $target.offset().top;

  $window.on("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $topPosition) {
      $target.addClass("fixed");
      return;
    } else {
      $target.removeClass("fixed");
    }
    return;
  });
});
