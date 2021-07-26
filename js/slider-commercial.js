var commercialSlider = new Swiper('.inner-professional__container', {

	navigation: {
		nextEl: ".inner-professional__button_next",
		prevEl: ".inner-professional__button_prev",
	},

	pagination: {
		el: ".inner-professional__pagination",
		clickable: true,
	},

	spaceBetween: 30,

	//Кол-во слайдов для показа
	slidesPerView: 1,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});

