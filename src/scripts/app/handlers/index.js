import renderCal from "../calendar/index.js";
import { getDate, date } from "../utils/getDate.js";
import { attributes } from "../utils/getAttributes.js";
import { showFormEventDay } from "../modal/index.js";
import { popup } from "../template/index.js";

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
  popupHandler: function (event) {
    const target = event.target;
    const parent = target.closest(`.header__buttons`);
    parent.appendChild(popup(attributes));
    target.classList.add(`btn--active`);
    target.setAttribute(`disabled`, `disabled`);

    const popupForm = parent.lastChild;
    const icon = popupForm.querySelector(`.js-popup-cross`);
    const buttonPopup = popupForm.querySelector(`.js-btn-create`);
    icon.addEventListener(`click`, unlockPopup);
    buttonPopup.addEventListener(`click`, unlockPopup);
  },
  prevMonthHandler: function () {
    const days = document.querySelectorAll(`.js-day`);
    days.forEach(day => {
      calendar.removeChild(day);
    });
    date.setMonth(date.getMonth() - 1);
    renderCal();
  },
  todayHandler: function () {
    const days = document.querySelectorAll(`.js-day`);
    days.forEach(day => {
      calendar.removeChild(day);
    });
    date.setMonth(month);
    date.setFullYear(year);
    renderCal();
  },
  nextMonthHandler: function () {
    const days = document.querySelectorAll(`.js-day`);
    days.forEach(day => {
      calendar.removeChild(day);
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

const unlockPopup = event => {
  const target = event.target;
  const parent = target.closest(`.header__buttons`);
  const button = parent.querySelector(`.js-btn-push`);
  button.classList.remove(`btn--active`);
  button.removeAttribute(`disabled`);
  parent.removeChild(parent.lastChild);
};

export default handlers;
