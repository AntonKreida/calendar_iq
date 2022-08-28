/* eslint-disable import/no-cycle */
import renderCal from '../calendar/index';
import { getDate, date } from '../utils/getDate';
import attributes from '../utils/getAttributes';
import { showFormEventDay, unlockPopup } from '../modal/index';
import { templatePopup } from '../template/index';

const { month, year } = getDate();
const calendar = document.querySelector('.calendar');

const handlers = {
	onFocusHandler() {
		const HeaderFormInput = document.querySelector('.js-from-input');
		HeaderFormInput.focus();
	},
	onReloadHandler() {
		const { location } = window;
		location.reload();
	},
	popupHandler(event) {
		const { target } = event;
		const parent = target.closest('.header__buttons');
		parent.appendChild(templatePopup(attributes));
		target.setAttribute('disabled', 'disabled');

		const popupForm = parent.lastChild;
		const icon = popupForm.querySelector('.js-popup-cross');
		const buttonPopup = popupForm.querySelector('.js-btn-create');
		icon.addEventListener('click', unlockPopup);
		buttonPopup.addEventListener('click', unlockPopup);
	},
	prevMonthHandler() {
		const days = document.querySelectorAll('.js-day');
		days.forEach((day) => {
			calendar.removeChild(day);
		});
		date.setMonth(date.getMonth() - 1);
		renderCal();
	},
	todayHandler() {
		const days = document.querySelectorAll('.js-day');
		days.forEach((day) => {
			calendar.removeChild(day);
		});
		date.setMonth(month);
		date.setFullYear(year);
		renderCal();
	},
	nextMonthHandler() {
		const days = document.querySelectorAll('.js-day');
		days.forEach((day) => {
			calendar.removeChild(day);
		});
		date.setMonth(date.getMonth() + 1);
		renderCal();
	},
	showEventForm(event) {
		const target = event.target.closest('.js-day');
		if (!target.classList.contains('js-day')) {
			return;
		}
		showFormEventDay(target);
	},
	unlockEventForm(event) {
		const { target } = event;
		const parent = target.closest('.js-day');
		parent.classList.remove('active');
		parent.classList.remove('block');
		parent.removeChild(parent.lastChild);
	},
	stopAscent(event) {
		event.stopPropagation();
	},
};

export default handlers;
