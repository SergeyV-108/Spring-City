/*================= Функционал выпадающего списка форм =================*/
let selectDisables = document.querySelectorAll('.select-form__disable');

for (let selectDisable of selectDisables) {
	selectDisable.onclick = function () {
		this.childNodes[1].classList.toggle('active');
		this.childNodes[3].classList.toggle('active');
	}

	let optionsValue = document.querySelectorAll('[data-value]');

	for (let optionValue of optionsValue) {
		optionValue.onclick = function () {
			let optionText = this.textContent;
			let dataValue = this.getAttribute('data-value');
			let selectDisableValue = optionValue.closest('.select-form__disable');

			selectDisableValue.childNodes[0].textContent = optionText;
			selectDisableValue.parentElement.setAttribute('data-selected-value', dataValue);
		}
	}
}
/*======================================================================*/
/*===================== Функционал бургера и меню ======================*/
let menuBurger = document.querySelector('.burger');
let menuList = document.querySelector('.body-header__bottom');

menuBurger.addEventListener("click", function (e) {
	menuBurger.classList.toggle('active');
	menuList.classList.toggle('active');
});
/*======================================================================*/
/*================== Функционал спойлера "questions" ===================*/
let itemsQuestionsHeader = document.querySelectorAll('.item-questions__header');

for (let itemQuestionsHeader of itemsQuestionsHeader) {

	itemQuestionsHeader.onclick = function () {

		let itemsQuestionsHeaderActive = document.querySelectorAll('.item-questions__header.active');

		this.classList.toggle('active');
		this.nextElementSibling.classList.toggle('active');
		this.querySelector('.fa-chevron-down').classList.toggle('active');
		
		for (let itemQuestionsHeaderActive of itemsQuestionsHeaderActive) {
			itemQuestionsHeaderActive.classList.remove('active');
			itemQuestionsHeaderActive.nextElementSibling.classList.remove('active');
			itemQuestionsHeaderActive.querySelector('.fa-chevron-down').classList.remove('active');
		}
	}
};
/*======================================================================*/
/*================= Функционал кнопок radio в "item-1" =================*/
let itemsRadio = document.querySelectorAll('.item-1__radio');

for (let itemtRadio of itemsRadio) {

	itemtRadio.onclick = function () {
		let itemsRadioActive = document.querySelectorAll('.item-1__radio.active');

		this.classList.toggle('active');
		this.querySelector('input').setAttribute('checked', '');
		this.querySelector('.fa-check').classList.toggle('checked');

		for (let itemRadioActive of itemsRadioActive) {
			itemRadioActive.classList.remove('active');
			itemRadioActive.querySelector('input').removeAttribute('checked');
			itemRadioActive.querySelector('.fa-check').classList.remove('checked');
		}
	}
};
/*======================================================================*/
/*================ Функционал кнопок checkbox в "item-2" ===============*/
let itemsСheckbox = document.querySelectorAll('.item-2__checkbox');

for (let itemСheckbox of itemsСheckbox) {

	itemСheckbox.onclick = function () {
		console.log(itemСheckbox.childNodes);
		if (this.classList.contains('active')) {
			this.querySelector('input').removeAttribute('checked');
		} else {
			this.querySelector('input').setAttribute('checked', '');
		}

		this.classList.toggle('active');
		this.querySelector('.fa-check').classList.toggle('checked');
	}
};
/*======================================================================*/
/*==================== Функционал quantity в "item-2" ==================*/
let quantityButtons = document.querySelectorAll('.quantity__button');

for (let quantityButton of quantityButtons) {
	quantityButton.onclick = function () {
		let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);

		if (quantityButton.classList.contains('quantity__button_plus')) {
			value++;
		} else {
			value--;
			if (value < 1) {
				value = 1
			}
		}
		quantityButton.closest('.quantity').querySelector('input').value = value;
	}
}
/*======================================================================*/
/*========================= calendar в "item-3" ========================*/
function calendar(id, year, month) {
	var Dlast = new Date(year, month + 1, 0).getDate(),
		D = new Date(year, month, Dlast),
		DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
		DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
		calendar = '<tr>',
		month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	if (DNfirst != 0) {
		for (var i = 1; i < DNfirst; i++) calendar += '<td>';
	} else {
		for (var i = 0; i < 6; i++) calendar += '<td>';
	}
	for (var i = 1; i <= Dlast; i++) {
		if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
			calendar += '<td class="today">' + i;
		} else {
			calendar += '<td>' + i;
		}
		if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
			calendar += '<tr>';
		}
	}
	for (var i = DNlast; i < 7; i++) calendar += '<td> ';
	document.querySelector('#' + id + ' tbody').innerHTML = calendar;
	document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
	document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
	document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
	if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
		// чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
		document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
	}
}
calendar("calendar", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
	calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
}
// переключатель плюс месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
	calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
}
/*======================================================================*/
/*======================= Функционал tabs-booking ======================*/
let tabsBookingHeader = document.querySelectorAll('.tabs-booking__header');
let navTabsChapters = document.querySelectorAll('.nav-tabs__chapter');
let contentTabsItems = document.querySelectorAll('.content-tabs__item');
let itemTabsBtnBack = document.querySelectorAll('.item-tabs__btn_back');
let itemTabsBtnNext = document.querySelectorAll('.item-tabs__btn_next');
let itemTabsBtnConfirm = document.querySelector('.item-tabs__btn_confirm');

// ========= С кликом по кнопкам (без табов) ===========

document.querySelector('.nav-tabs__chapter').classList.add('active');

navTabsChapters.forEach(showTabContent);
function showTabContent(chapter) {

	let tabIdHeader = chapter.getAttribute('data-header-tab');
	let currentHeader = document.querySelector(tabIdHeader);
	let tabIdItem = chapter.getAttribute('data-tab');
	let currentItem = document.querySelector(tabIdItem);

	if (chapter.classList.contains('active')) {
		tabsBookingHeader.forEach(function (item) {
			item.classList.remove('active');
		});

		contentTabsItems.forEach(function (item) {
			item.classList.remove('active');
		});

		currentHeader.classList.add('active');
		currentItem.classList.add('active');
	}
}

itemTabsBtnNext.forEach(function (btnNext) {
	btnNext.onclick = function () {
		document.querySelector('.nav-tabs__chapter.active').nextElementSibling.classList.add('active');
		document.querySelector('.nav-tabs__chapter.active').classList.remove('active');
		navTabsChapters.forEach(showTabContent);
	}
});

itemTabsBtnBack.forEach(function (btnBack) {
	btnBack.onclick = function () {
		document.querySelector('.nav-tabs__chapter.active').previousElementSibling.classList.add('active');
		document.querySelector('.nav-tabs__chapter.active').nextElementSibling.classList.remove('active');
		navTabsChapters.forEach(showTabContent);
	}
});

itemTabsBtnConfirm.onclick = function (event) {
	event.preventDefault()

	let headerTab6 = document.getElementById('h_tab_6');

	document.querySelector('.tabs-booking__header.active').remove('active');
	document.querySelector('.tabs-booking__nav').style.visibility = "hidden";
	document.querySelector('.tabs-booking__content').style.visibility = "hidden";
	headerTab6.classList.add('active');
}

/* ============== С кликом по табам и кнопкам =================

navTabsChapters.forEach(function (chapter) {
	chapter.onclick = function () {
		let tabIdHeader = chapter.getAttribute('data-header-tab');
		let currentHeader = document.querySelector(tabIdHeader);
		let tabIdItem = chapter.getAttribute('data-tab');
		let currentItem = document.querySelector(tabIdItem);

		if (!chapter.classList.contains('active')) {
			navTabsChapters.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsBookingHeader.forEach(function (item) {
				item.classList.remove('active');
			});

			contentTabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			this.classList.add('active');
			currentHeader.classList.add('active');
			currentItem.classList.add('active');
		}
	}
});

itemTabsBtnNext.forEach(function (btnNext) {
	btnNext.onclick = function () {
		document.querySelector('.nav-tabs__chapter.active').nextElementSibling.click();
	}
});

itemTabsBtnBack.forEach(function (btnBack) {
	btnBack.onclick = function () {
		document.querySelector('.nav-tabs__chapter.active').previousElementSibling.click();
	}
});

itemTabsBtnConfirm.onclick = function (event) {
	event.preventDefault()

	let headerTab6 = document.getElementById('h_tab_6');

	document.querySelector('.tabs-booking__header.active').remove('active');
	document.querySelector('.tabs-booking__nav').style.visibility = "hidden";
	document.querySelector('.tabs-booking__content').style.visibility = "hidden";
	headerTab6.classList.add('active');
}

document.querySelector('.nav-tabs__chapter').click(); */
/*======================================================================*/