/* eslint-disable import/no-cycle */
import renderCal from '../calendar/index';
import Suggest from '../class/suggest';
import showFormDay from '../modal/index';
import { templatePopup } from '../template/index';
import attributes from '../utils/attributes';
import { getDate, date } from '../utils/getDate';

const { month, year } = getDate();
const calendar = document.querySelector('.js-calendar');

const handlers = {
  onFocusHandler() {
    const HeaderFormInput = document.querySelector('.js-from-input');
    HeaderFormInput.focus();
  },

  onReloadHandler() {
    const { location } = window;
    location.reload();
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
    showFormDay(target);
  },

  unlockEventForm(event) {
    const { target } = event;
    const parent = target.closest('.js-day');
    parent.classList.remove('active');
    parent.classList.remove('block');
    parent.removeChild(parent.lastChild);
    handlers.checkDay(parent);
    handlers.resetLocalElement(parent);

    handlers.initSuggest();
  },

  stopAscent(event) {
    event.stopPropagation();
  },

  popupHandler(event) {
    const { target } = event;
    const parent = target.closest('.js-header-buttons');
    parent.appendChild(templatePopup(attributes));
    target.setAttribute('disabled', 'disabled');

    const popup = parent.lastChild;
    const popupForm = popup.querySelector('.js-form');
    const buttonPopupClose = popup.querySelector('.js-popup-button');

    buttonPopupClose.addEventListener('click', handlers.unlockPopup);
    popupForm.addEventListener('submit', handlers.submitPopup);
  },

  unlockPopup(event) {
    const { target } = event;
    const parent = target.closest('.js-header-buttons');
    const button = parent.querySelector('.js-btn-push');

    button.removeAttribute('disabled');
    parent.removeChild(parent.lastChild);
  },

  submitPopup(event) {
    event.preventDefault();
    const { target } = event;
    const message = target.querySelector('.js-message');
    const input = target.querySelector('.js-from-input');
    const { value } = input;
    const cont = 3;

    if (!target.checkValidity() || value.search(`^${'([^,]+),\\s*'.repeat(cont)}(.+)`) === -1) {
      input.classList.add('invalid');
      message.classList.add('invalid');
      message.textContent = 'Формат: дд.мм.гггг, Заголовок, Участники, Описание';

      return;
    }

    let listEvent = value.match(`^${'([^,]+),\\s*'.repeat(cont)}(.+)`);
    listEvent = listEvent.slice(1);

    const [numberDay] = listEvent[0].split('.');

    input.classList.remove('invalid');
    message.classList.remove('invalid');

    const [dataDay] = listEvent;
    const html = `<h4 class = 'day__head js-day-head'>${numberDay}</h4>
      <div class = 'day__title js-title' data-title = 'eventTitle'>${listEvent[1]}</div>
      <div class = 'day__subtitle js-subtitle' data-subtitle = 'subtitle'>${listEvent[2]}</div>
      <div class = 'day__text js-text' data-text = 'text'>${listEvent[3]}</div>`;

    const saveDay = {
      title: listEvent[1],
      data: dataDay,
      html,
    };

    localStorage.setItem(dataDay, JSON.stringify(saveDay));

    const popup = target.closest('.js-popup');
    const button = document.querySelector('.js-btn-push');

    button.removeAttribute('disabled');
    popup.remove();
    handlers.initSuggest();

    const days = document.querySelectorAll('.js-day');
    days.forEach((day) => {
      calendar.removeChild(day);
    });
    renderCal();
  },

  resetFormDay(event) {
    const target = event.target.closest('.js-day');

    const inputTitle = document.querySelector('.js-input-title');
    const inputParty = document.querySelector('.js-input-party');
    const textarea = document.querySelector('.js-textarea');

    const dayTitle = target.querySelector('.js-title');
    const daySubtitle = target.querySelector('.js-subtitle');
    const dayText = target.querySelector('.js-text');

    inputTitle.removeAttribute('value');
    inputParty.removeAttribute('value');

    inputTitle.value = '';
    inputParty.value = '';
    textarea.value = '';
    textarea.textContent = '';

    dayTitle.textContent = '';
    daySubtitle.textContent = '';
    dayText.textContent = '';
  },

  checkDay(target) {
    const dayTitle = target.querySelector('.js-title');
    const daySubtitle = target.querySelector('.js-subtitle');
    const dayText = target.querySelector('.js-text');

    if (dayTitle.textContent.length > 0 || daySubtitle.textContent.length > 0 || dayText.textContent.length > 0) {
      target.classList.add('valid');
    } else {
      target.classList.remove('valid');
    }
  },

  saveLocalElement(target) {
    const dayTitle = target.querySelector('.js-title');
    const daySubtitle = target.querySelector('.js-subtitle');
    const dayText = target.querySelector('.js-text');

    if (dayTitle.textContent.length > 0 || daySubtitle.textContent.length > 0 || dayText.textContent.length > 0) {
      const dataDay = target.dataset.day;
      const html = target.innerHTML;
      const saveDay = {
        title: dayTitle.textContent,
        data: dataDay,
        html,
      };

      localStorage.setItem(dataDay, JSON.stringify(saveDay));
    }
  },

  resetLocalElement(target) {
    const dayTitle = target.querySelector('.js-title');
    const daySubtitle = target.querySelector('.js-subtitle');
    const dayText = target.querySelector('.js-text');

    if (dayTitle.textContent.length === 0 || daySubtitle.textContent.length === 0 || dayText.textContent.length === 0) {
      const dataDay = target.dataset.day;
      localStorage.removeItem(dataDay);
    }
  },

  renderSaveDay() {
    const days = document.querySelectorAll('.js-day');

    days.forEach((elem) => {
      if (localStorage.getItem(elem.dataset.day) !== null) {
        const itemDay = JSON.parse(localStorage.getItem(elem.dataset.day));
        elem.innerHTML = itemDay.html;
      }

      const dayTitle = elem.querySelector('.js-title');
      const daySubtitle = elem.querySelector('.js-subtitle');
      const dayText = elem.querySelector('.js-text');

      if (dayTitle.textContent.length > 0 || daySubtitle.textContent.length > 0 || dayText.textContent.length > 0) {
        elem.classList.add('valid');
      } else {
        elem.classList.remove('valid');
      }
    });
  },

  initSuggest() {
    const inputNav = document.querySelector('.js-from-input');
    const listDay = Object.values(localStorage);
    const listDayTitle = [];
    listDay.forEach((item) => {
      listDayTitle.push(JSON.parse(item));
    });
    // eslint-disable-next-line no-unused-vars
    const suggest = new Suggest(inputNav, listDayTitle);
  },
};

export default handlers;
