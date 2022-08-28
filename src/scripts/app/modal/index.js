import { form } from "../template";
import handlers from "../handlers/index.js";
import { attributes } from "../utils/getAttributes";

export const showFormEventDay = targetDay => {
  if (targetDay.classList.contains(`active`)) {
    targetDay.classList.remove(`active`, `block`);
    targetDay.removeChild(targetDay.lastChild);
  } else if (!targetDay.classList.contains(`active`)) {
    const days = document.querySelectorAll(`.js-day`);
    days.forEach(day => {
      if (day.classList.contains(`active`)) {
        day.classList.remove(`active`, `block`);
        day.removeChild(day.lastChild);
      }
    });

    targetDay.classList.add(`active`, `block`);
    targetDay.appendChild(form(attributes));

    const iconEventForm = targetDay.querySelector(`.js-icon-event`);
    iconEventForm.addEventListener(`click`, handlers.unlockEventForm);

    const buttonFormEvent = targetDay.querySelector(`.js-btn-event-form`);
    buttonFormEvent.addEventListener(`click`, handlers.unlockEventForm);

    const eventForm = targetDay.querySelector(`.event`);
    eventForm.addEventListener("click", handlers.stopAscent);
  }
};



export const unlockPopup = event => {
  const target = event.target;
  const parent = target.closest(`.header__buttons`);
  const button = parent.querySelector(`.js-btn-push`);
  button.removeAttribute(`disabled`);
  parent.removeChild(parent.lastChild);
};
