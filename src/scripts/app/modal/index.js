/* eslint-disable import/no-cycle */
import handlers from '../handlers/index';
import { templateFormDay } from '../template';
import attributes from '../utils/attributes';
import checkValidity from '../validator/index';

import fillInputData from './modal.input';

const showFormDay = (targetDay) => {
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

    checkValidity();
    fillInputData(targetDay);
    handlers.checkDay(targetDay);

    const iconEventForm = targetDay.querySelector('.js-btn-form-closest');
    iconEventForm.addEventListener('click', handlers.unlockEventForm);

    const eventForm = targetDay.querySelector('.js-day-form');
    eventForm.addEventListener('click', handlers.stopAscent);

    const position = eventForm.getBoundingClientRect();

    if (position.right > window.innerWidth && position.bottom > window.innerHeight) {
      eventForm.classList.remove('day__form');
      eventForm.classList.add('day__form-active');
      eventForm.classList.add('top-active');
    } else if (position.bottom > window.innerHeight) {
      eventForm.classList.add('top');
    } else if (position.right > window.innerWidth) {
      eventForm.classList.remove('day__form');
      eventForm.classList.add('day__form-active');
    }

    const buttonReset = targetDay.querySelector('.js-button-reset');
    buttonReset.addEventListener('click', handlers.resetFormDay);
  }
};

export default showFormDay;
