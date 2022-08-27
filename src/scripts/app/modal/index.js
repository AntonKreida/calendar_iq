import { form } from "../template";
import handlers from "../handlers/index.js";
import { attributes } from "../utils/getAttributes";

export const showFormEventDay = targetDay => {
  if (targetDay.classList.contains(`day--active`)) {
    targetDay.classList.remove(`day--block`, `day--active`);
    targetDay.removeChild(targetDay.lastChild);
  } else if (!targetDay.classList.contains(`day--active`)) {
    const days = document.querySelectorAll(`.js-day`);
    days.forEach(day => {
      if (day.classList.contains(`day--active`)) {
        day.classList.remove(`day--block`, `day--active`);
        day.removeChild(day.lastChild);
      }
    });

    targetDay.classList.add(`day--block`, `day--active`);
    targetDay.appendChild(form(attributes));

    const iconEventForm = targetDay.querySelector(`.js-icon-event`);
    iconEventForm.addEventListener(`click`, handlers.unlockEventForm);

    const buttonFormEvent = targetDay.querySelector(`.js-btn-event-form`);
    buttonFormEvent.addEventListener(`click`, handlers.unlockEventForm);

    const eventForm = targetDay.querySelector(`.event`);
    eventForm.addEventListener("click", handlers.stopAscent);
  }
};
