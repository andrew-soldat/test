const imgItems = document.querySelectorAll('.content__bg'),
   titlesFilter = document.querySelectorAll('.filter__title'),
   body = document.querySelector('body'),
   header = document.querySelector('header'),
   burgerButton = document.querySelector('.header__burger'),
   menuNav = document.querySelector('.header__nav');

burgerButton.addEventListener('click', function (e) {
   burgerButton.classList.toggle('active');
   menuNav.classList.toggle('active');
   body.classList.toggle('lock');
});

document.addEventListener('click', function (e) {
   if (!e.target.closest('.header__nav, .header__burger')) {
      burgerButton.classList.remove('active');
		menuNav.classList.remove('active');
		body.classList.remove('lock');
		}
});

titlesFilter.forEach(item => {
	item.addEventListener('click', function (){
		if (item.classList.contains("active")) {
			item.classList.remove('active');
		} else {
			addClass(item);
		}
	})
})

function addClass(currentItem) {
	titlesFilter.forEach((item) => {
		item.classList.remove('active');
	})
	item = currentItem;
	item.classList.add('active');
}

document.addEventListener('click', function(e){
	if (!e.target.closest('.filter__section')) {
		titlesFilter.forEach(item => {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
			}
		})
	}
})

function parallax(e) {
   imgItems.forEach((item) => {
      let speed = item.getAttribute('data-speed');
      item.style.transform = `translate(${(e.clientX * speed) / 2000}px, ${
         (e.clientY * speed) / 2000
      }px)`;
   });
}

document.addEventListener('mousemove', parallax)

$('.partners__body').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	responsive: [
		{
			breakpoint: 1250,
			settings: {
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
					arrows: false,
					dots: true
			}
		},
		{
			breakpoint: 765,
			settings: {
				slidesToShow: 3,
					arrows: false,
					dots: true
			}
		},
		{
			breakpoint: 565,
			settings: {
				slidesToShow: 2,
					arrows: false,
					dots: true
			}
		},
		{
			breakpoint: 450,
			settings: {
				slidesToShow: 1,
					arrows: false,
					dots: true
			}
		},
	]
});
$('.main-slider-news__wrapper').slick({
	infinite: true,
	dots: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 1250
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 565,
			settings: {
				slidesToShow: 1
			}
		},
	]
});
$('.news__slider').slick({
	infinite: false,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1250,
			settings: {
				arrows: false,
				dots: true
			}
		},
	]
});
$(".photo-slider__main").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: ".photo-slider__nav",
});
$(".photo-slider__nav").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".photo-slider__main",
	dots: true,
	arrows: true,
	centerMode: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 565,
			settings: {
				slidesToShow: 2
			}
		},
	]
});
$(function () {
	$(".map__link").hover(function(e) {
		$($(this).attr('data-class')).toggleClass('_active');
	})
});


// =============  Function ibg  ====================================================
function ibg() {
   let ibg = document.querySelectorAll('._ibg');
   for (var i = 0; i < ibg.length; i++) {
      if (
         ibg[i].querySelector('img') &&
         ibg[i].querySelector('img').getAttribute('src') != null
      ) {
         ibg[i].style.backgroundImage =
            'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();