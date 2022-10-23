/* eslint-disable import/no-cycle */
import renderCal from "../calendar/index";
import { getDate, date } from "../utils/getDate";
import attributes from "../utils/attributes";
import showFormDay from "../modal/index";
import { templatePopup } from "../template/index";

const { month, year } = getDate();
const calendar = document.querySelector(".js-calendar");

const handlers = {
  onFocusHandler() {
    const HeaderFormInput = document.querySelector(".js-from-input");
    HeaderFormInput.focus();
  },
  onReloadHandler() {
    const { location } = window;
    location.reload();
  },
  popupHandler(event) {
    const { target } = event;
    const parent = target.closest(".js-header-buttons");
    parent.appendChild(templatePopup(attributes));
    target.setAttribute("disabled", "disabled");

    const popupForm = parent.lastChild;
    const buttonPopupClose = popupForm.querySelector(".js-popup-button");
    const buttonPopupCreate = popupForm.querySelector(".js-btn-create");
    buttonPopupClose.addEventListener("click", handlers.unlockPopup);
    buttonPopupCreate.addEventListener("click", handlers.unlockPopup);
  },
  prevMonthHandler() {
    const days = document.querySelectorAll(".js-day");
    days.forEach((day) => {
      calendar.removeChild(day);
    });
    date.setMonth(date.getMonth() - 1);
    renderCal();
  },
  todayHandler() {
    const days = document.querySelectorAll(".js-day");
    days.forEach((day) => {
      calendar.removeChild(day);
    });
    date.setMonth(month);
    date.setFullYear(year);
    renderCal();
  },
  nextMonthHandler() {
    const days = document.querySelectorAll(".js-day");
    days.forEach((day) => {
      calendar.removeChild(day);
    });
    date.setMonth(date.getMonth() + 1);
    renderCal();
  },
  showEventForm(event) {
    const target = event.target.closest(".js-day");
    if (!target.classList.contains("js-day")) {
      return;
    }
    showFormDay(target);
  },
  unlockEventForm(event) {
    const { target } = event;
    const parent = target.closest(".js-day");
    parent.classList.remove("active");
    parent.classList.remove("block");
    parent.removeChild(parent.lastChild);
    handlers.checkDay(parent);
    handlers.resetLocalElement(parent);
  },
  stopAscent(event) {
    event.stopPropagation();
  },

  unlockPopup(event) {
    const { target } = event;
    const parent = target.closest(".js-header-buttons");
    const button = parent.querySelector(".js-btn-push");
    button.removeAttribute("disabled");
    parent.removeChild(parent.lastChild);
  },

  resetFormDay(event) {
    const target = event.target.closest(".js-day");

    const inputTitle = document.querySelector(".js-input-title");
    const inputParty = document.querySelector(".js-input-party");
    const textarea = document.querySelector(".js-textarea");

    const dayTitle = target.querySelector(".js-title");
    const daySubtitle = target.querySelector(".js-subtitle");
    const dayText = target.querySelector(".js-text");

    inputTitle.removeAttribute("value");
    inputParty.removeAttribute("value");

    inputTitle.value = "";
    inputParty.value = "";
    textarea.value = "";
    textarea.textContent = "";

    dayTitle.textContent = "";
    daySubtitle.textContent = "";
    dayText.textContent = "";
  },

  checkDay(target) {
    const dayTitle = target.querySelector(".js-title");
    const daySubtitle = target.querySelector(".js-subtitle");
    const dayText = target.querySelector(".js-text");

    if (
      dayTitle.textContent.length > 0 ||
      daySubtitle.textContent.length > 0 ||
      dayText.textContent.length > 0
    ) {
      target.classList.add("valid");
    } else {
      target.classList.remove("valid");
    }
  },

  saveLocalElement(target) {
    const dayTitle = target.querySelector(".js-title");
    const daySubtitle = target.querySelector(".js-subtitle");
    const dayText = target.querySelector(".js-text");

    if (
      dayTitle.textContent.length > 0 ||
      daySubtitle.textContent.length > 0 ||
      dayText.textContent.length > 0
    ) {
      const dataDay = target.dataset.day;
      const html = target.innerHTML;
      localStorage.setItem(dataDay, html);
    }
  },

  resetLocalElement(target) {
    const dayTitle = target.querySelector(".js-title");
    const daySubtitle = target.querySelector(".js-subtitle");
    const dayText = target.querySelector(".js-text");

    if (
      dayTitle.textContent.length === 0 ||
      daySubtitle.textContent.length === 0 ||
      dayText.textContent.length === 0
    ) {
      const dataDay = target.dataset.day;
      localStorage.removeItem(dataDay);
    }
  },

  renderSaveDay() {
    const days = document.querySelectorAll(".js-day");

    days.forEach((elem) => {
      if (localStorage.getItem(elem.dataset.day) !== null) {
        // eslint-disable-next-line no-param-reassign
        elem.innerHTML = localStorage.getItem(elem.dataset.day);
      }

      const dayTitle = elem.querySelector(".js-title");
      const daySubtitle = elem.querySelector(".js-subtitle");
      const dayText = elem.querySelector(".js-text");

      if (
        dayTitle.textContent.length > 0 ||
        daySubtitle.textContent.length > 0 ||
        dayText.textContent.length > 0
      ) {
        elem.classList.add("valid");
      } else {
        elem.classList.remove("valid");
      }
    });
  },
};

export default handlers;
