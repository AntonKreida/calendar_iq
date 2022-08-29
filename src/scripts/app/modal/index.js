/* eslint-disable import/no-cycle */
import { templateFormDay } from '../template';
import handlers from '../handlers/index';
import attributes from '../utils/getAttributes';

export const showFormDay = (targetDay) => {
	if (targetDay.classList.contains('active')) {
		targetDay.classList.remove('active', 'block');
		targetDay.removeChild(targetDay.lastChild);
	} else if (!targetDay.classList.contains('active')) {
		const days = document.querySelectorAll('.js-day');
		days.forEach((day) => {
			if (day.classList.contains('active')) {
				day.classList.remove('active', 'block');
				day.removeChild(day.lastChild);
			}
		});

		targetDay.classList.add('active', 'block');
		targetDay.appendChild(templateFormDay(attributes));

		const iconEventForm = targetDay.querySelector('.js-btn-form-closest');
		iconEventForm.addEventListener('click', handlers.unlockEventForm);

		const buttonFormEvent = targetDay.querySelector('.js-btn-form');
		buttonFormEvent.addEventListener('click', handlers.unlockEventForm);

		const eventForm = targetDay.querySelector('.day__form');
		eventForm.addEventListener('click', handlers.stopAscent);
	}
};

export const unlockPopup = (event) => {
	const { target } = event;
	const parent = target.closest('.header__buttons');
	const button = parent.querySelector('.js-btn-push');
	button.removeAttribute('disabled');
	parent.removeChild(parent.lastChild);
};
