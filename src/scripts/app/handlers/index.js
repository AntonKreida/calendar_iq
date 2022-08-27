import renderCal from "../calendar/index.js";
import { getDate, date } from "../utils/getDate.js";
import { showFormEventDay } from "../modal/index.js";

const { month, year } = getDate();
const calendar = document.querySelector(`.calendar`);

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
    const day = document.querySelectorAll(`.js-day`);
    day.forEach(element => {
      calendar.removeChild(element);
    });
    date.setMonth(date.getMonth() - 1);
    renderCal();
  },
  todayHandler: function () {
    const day = document.querySelectorAll(`.js-day`);
    day.forEach(element => {
      calendar.removeChild(element);
    });
    date.setMonth(month);
    date.setFullYear(year);
    renderCal();
  },
  nextMonthHandler: function () {
    const day = document.querySelectorAll(`.js-day`);
    day.forEach(element => {
      calendar.removeChild(element);
    });
    date.setMonth(date.getMonth() + 1);
    renderCal();
  },
  showEventForm: function (event) {
    const target = event.target.closest(`.js-day`);
    if (!target.classList.contains(`js-day`)) return;

    showFormEventDay(target);
  },
  unlockEventForm: function (event) {
    const target = event.target;
    const parent = target.closest(`.js-day`);
    parent.classList.remove(`day--active`);
    parent.classList.remove(`day--block`);
    parent.removeChild(parent.lastChild);
  },

  stopAscent: function (event) {
    event.stopPropagation();
  },
};

export default handlers;
