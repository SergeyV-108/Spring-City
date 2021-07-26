var clientsSlider = new Swiper('.inner-clients__container', {

	navigation: {
		nextEl: ".inner-clients__button_next",
		prevEl: ".inner-clients__button_prev",
	},

	pagination: {
		el: ".inner-clients__pagination",
		clickable: true,
	},

	spaceBetween: 10,

	//Кол-во слайдов для показа
	slidesPerView: 1,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});

