import renderCal from "../calendar/index.js";
import showFormEventDay  from "../modal/index.js";
import { getDate, date } from "../utils/getDate.js";

const { month, year } = getDate();

const handlers = {
  onFocusHandler: function () {
    const HeaderFormInput = document.querySelector(`.js-from-input`);
    HeaderFormInput.focus();
  },
  onReloadHandler: function () {
    const location = window.location;
    location.reload();
  },
  openPopupHandler: function () {
    const pushButton = document.querySelector(`.js-btn-push`);
    const popup = document.querySelector(`.js-popup`);
    pushButton.classList.add(`btn--active`);
    popup.classList.add(`popup--active`);
  },
  unlockPopupHandler: function () {
    const pushButton = document.querySelector(`.js-btn-push`);
    const popup = document.querySelector(`.js-popup`);
    pushButton.classList.remove(`btn--active`);
    popup.classList.remove(`popup--active`);
  },
  onCreateQuickEventHandler: function () {
    const pushButton = document.querySelector(`.js-btn-push`);
    const popup = document.querySelector(`.js-popup`);
    pushButton.classList.remove(`btn--active`);
    popup.classList.remove(`popup--active`);
  },
  prevMonthHandler: function () {
    const calendar = document.querySelector(`.calendar__days`);
    const day = document.querySelectorAll(`.js-day`);
    day.forEach((element) => {
      calendar.removeChild(element);
    })
    date.setMonth(date.getMonth() - 1);
    renderCal();
    showFormEventDay();
  },
  todayHandler: function () {
    const calendar = document.querySelector(`.calendar__days`);
    const day = document.querySelectorAll(`.js-day`);
    day.forEach((element) => {
      calendar.removeChild(element);
    })
    date.setMonth(month);
    date.setFullYear(year);
    renderCal();
    showFormEventDay();
  },
  nextMonthHandler: function () {
    const calendar = document.querySelector(`.calendar__days`);
    const day = document.querySelectorAll(`.js-day`);
    day.forEach((element) => {
      calendar.removeChild(element);
    })
    date.setMonth(date.getMonth() + 1);
    renderCal();
    showFormEventDay();
  },
  unlockForm: function () {
    const eventForm = document.querySelector(`.event`);
    const day = eventForm.parentElement;
    day.classList.remove(`day--active`);
    day.classList.remove(`day--block`);
    day.removeChild(eventForm);
  },
  stopAscent: function (event) {
    event.stopPropagation();
  }
};

export const onFocusHandler = handlers.onFocusHandler;
export const onReloadHandler = handlers.onReloadHandler;
export const openPopupHandler = handlers.openPopupHandler;
export const unlockPopupHandler = handlers.unlockPopupHandler;
export const onCreateQuickEventHandler = handlers.onCreateQuickEventHandler;
export const prevMonthHandler = handlers.prevMonthHandler;
export const todayHandler = handlers.todayHandler;
export const nextMonthHandler = handlers.nextMonthHandler;
export const unlockForm = handlers.unlockForm;
export const stopAscent = handlers.stopAscent;
