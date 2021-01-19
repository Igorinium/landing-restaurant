$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
let myImageSlider = new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-nextt',
		prevEl: '.swiper-button-prevv'
	},
	slidesPerView: 3,
	slideToClickedSlide: true,


	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',

	},
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		1250: {
			slidesPerView: 2,
		},
		1920: {
			slidesPerView: 3,
		}
	},
});
