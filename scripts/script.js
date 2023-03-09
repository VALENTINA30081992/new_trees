//////////////////////////////////////////////////////////////////////////////
/* Trees slick*/
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
      breakpoint: 1344,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 945,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 705,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//////////////////////////////////////////////////////////////////////////////
/* Reviews slick*/

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
/////////////////////////////////////////////////////////////////////////////////
/*FIXED MENU*/

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

///////////////////////////////////////////////////////////
/* Make mobile navigation work*/

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".dropdown");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////
/*Scroll back to top*/
const goTop = document.querySelector(".back-top");
window.onscroll = () => {
  if (window.pageYOffset < 700) {
    goTop.style.display = "none";
  } else {
    goTop.style.display = "block";
  }
};
///////////////////////////////////////////////////////////////////////////////////* Set current year*/
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///----pop-up
function PopUpShow() {
  $(".popup").show();
}
function PopUpHide() {
  $(".popup").hide();
}

$(".popup").on("click", function () {
  PopUpHide();
});
