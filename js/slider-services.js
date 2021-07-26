var servicesSlider = new Swiper('.row-items__container', {

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	pagination: {
		el: ".row-items__pagination",
		clickable: true,
	},

	spaceBetween: 10,

	//Кол-во слайдов для показа
	slidesPerView: 1,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});

