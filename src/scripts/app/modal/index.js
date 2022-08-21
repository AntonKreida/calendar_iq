import { templateFormDay } from "../template";
import { unlockForm, stopAscent } from "../handlers/index";

const showFormEventDay = () => {
  const day = document.querySelectorAll(`.js-day`);
  day.forEach((person) => {
    const showForm = () => {
      const days = document.querySelectorAll(`.js-day`);
      days.forEach((element) => {
        if (element.classList.contains(`day--block`)) {
          element.classList.remove(`day--block`);
        }
        if (element.classList.contains(`day--active`)) {
          const eventForm = document.querySelector(`.event`);
          element.classList.remove(`day--active`);
          element.removeChild(eventForm);
        }
      });

      const eventFormRemove = document.querySelectorAll(`.event`);
      eventFormRemove.forEach((element) => {
        if (element.classList.contains(`event--active`)) {
          element.classList.remove(`event--active`);
        }
      });

      person.classList.add(`day--active`);
      person.classList.add(`day--block`);
      person.appendChild(templateFormDay());

      const eventFormActive = person.querySelector(`.event`);
      eventFormActive.classList.add(`event--active`);

      const iconEvent = document.querySelector(`.js-icon-event`);
      iconEvent.addEventListener(`click`, unlockForm);

      const buttonFormEvent = document.querySelector(`.js-btn-event-form`);
      buttonFormEvent.addEventListener(`click`, unlockForm);

      const eventForm = document.querySelector(`.event`);
      eventForm.addEventListener(`click`, stopAscent);
    };
    person.addEventListener(`click`, showForm);
  });
};

export default showFormEventDay;
