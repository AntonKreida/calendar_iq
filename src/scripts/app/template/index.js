//generation template form day
export const templateFormDay = () => {
  const event = document.createElement(`div`);
  event.classList.add(`event`, `event--active`);

  const imgForm = document.createElement(`img`);
  imgForm.classList.add(`icon--cross`, `icon--cross--form`, `js-icon-event`);
  imgForm.src = `./assets/icon_cross.svg`;
  imgForm.setAttribute(`alt`, "none");
  event.appendChild(imgForm);

  const form = document.createElement(`form`);
  form.classList.add(`event__form`, `form` , `js-form`);
  form.action = `/`;
  form.setAttribute(`method`, `post`);
  event.appendChild(form);

  const inputDate = document.createElement(`input`);
  inputDate.classList.add(`form__input`, `event__input`, `js-from-input`);
  inputDate.setAttribute(`type`, `text`);
  inputDate.setAttribute(`placeholder`, `Событие...`);
  inputDate.setAttribute(`name`, `eventDate`);
  form.appendChild(inputDate);

  const inputTitle = document.createElement(`input`);
  inputTitle.classList.add(`form__input`, `event__input`, `js-from-input`, `js-from-input-date`);
  inputTitle.setAttribute(`type`, `text`);
  inputTitle.setAttribute(`placeholder`, `День, месяц, год...`);
  inputTitle.setAttribute(`name`, `eventTitle`);
  form.appendChild(inputTitle);

  const inputNameParty = document.createElement(`input`);
  inputNameParty.classList.add(`form__input`, `event__input`, `js-from-input`);
  inputNameParty.setAttribute(`type`, `text`);
  inputNameParty.setAttribute(`placeholder`, `Имена участников...`);
  inputNameParty.setAttribute(`name`, `eventParty`);
  form.appendChild(inputNameParty);

  const textarea = document.createElement(`textarea`);
  textarea.classList.add(`form__textarea`, `js-form`, `js-from-input`, `js-textarea`);
  textarea.setAttribute(`placeholder`, `Описание...`);
  textarea.setAttribute(`name`, `eventText`);
  form.appendChild(textarea);

  const control = document.createElement(`div`);
  control.classList.add(`form-control`);
  form.appendChild(control);

  const buttonReady = document.createElement(`button`);
  buttonReady.classList.add(
    `btn-control`,
    `btn-control--form`,
    `js-btn-event-form`
  );
  buttonReady.setAttribute(`type`, `button`);
  buttonReady.textContent = `Готово`;
  control.appendChild(buttonReady);

  const buttonReset = document.createElement(`button`);
  buttonReset.classList.add(`btn-control`, `btn-control--form`);
  buttonReset.setAttribute(`type`, `reset`);
  buttonReset.textContent = `Удалить`;
  control.appendChild(buttonReset);

  return event;
};

//generation template day
export const templateDay = () => {
  const day = document.createElement(`div`);
  day.classList.add(`day`, `js-day`);

  const titleDay = document.createElement(`h4`);
  titleDay.classList.add(`day__head`);
  day.appendChild(titleDay);

  const eventTitle = document.createElement(`div`);
  eventTitle.classList.add(`day__title`);
  day.appendChild(eventTitle);

  const title = document.createElement(`h4`);
  eventTitle.appendChild(title);

  const eventText = document.createElement(`div`);
  eventText.classList.add(`day__text`);
  day.appendChild(eventText);

  return day;
};
