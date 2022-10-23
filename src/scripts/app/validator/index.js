/* eslint-disable import/no-cycle */
import handlers from "../handlers/index";

const checkValidForm = () => {
  const formEvent = document.querySelector(".js-form");

  formEvent.addEventListener("submit", (event) => {
    event.preventDefault();
    const { target } = event;
    const inputs = target.querySelectorAll(".js-form-input");
    const message = target.querySelector(".js-form-message");

    const day = target.closest(".js-day");

    const dayTitle = day.querySelector(".js-title");
    const daySubtitle = day.querySelector(".js-subtitle");
    const dayText = day.querySelector(".js-text");

    const inputTitle = target.querySelector(".js-input-title");
    const inputParty = target.querySelector(".js-input-party");
    const textarea = target.querySelector(".js-textarea");

    inputs.forEach((input) => {
      if (input.validity.valid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
      } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
      }
    });

    if (!target.checkValidity()) {
      message.classList.remove("hidden");
      return;
    }
    message.classList.add("hidden");

    dayTitle.textContent = inputTitle.value;
    daySubtitle.textContent = inputParty.value;
    dayText.textContent = textarea.value;

    handlers.unlockEventForm(event);
  });
};

export default checkValidForm;
