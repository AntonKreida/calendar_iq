// generation template day
export const templateDay = (numberDay) => {
  const template = ` 
<div class = 'day js-day'>
  <h4 class = 'day__head js-day-head'>${numberDay}</h4>
  <div class = 'day__title js-title' data-title = 'eventTitle'></div>
  <div class = 'day__subtitle js-subtitle' data-subtitle = 'subtitle'></div>
  <div class = 'day__text js-text' data-text = 'text'></div>
</div>`;

  return template;
};

// generation template form day
export const templateFormDay = ({ type, img, placeholder, buttonName, name }) => {
  const template = `
  <button class="btn-form-closest js-btn-form-closest" type="button">
    <img class="icon-svg--cross" src="${img}" alt="none">
  </button>  
  <form class="day__form-event form js-form" action="/" method="GET" novalidate>
    <input class="form__input day__form-input js-form-input js-input-title" type="${type.text}" placeholder="${placeholder.event}" name="${name.title}" autocomplete="off" required>
    <input class="form__input day__form-input js-form-input js-input-data" type="${type.text}" placeholder="${placeholder.data}" name="${name.data}" readonly autocomplete="off" required>
    <input class="form__input day__form-input js-form-input js-input-party" type="${type.text}" placeholder="${placeholder.party}" name="${name.party}" autocomplete="off" required>
    <textarea class="form__textarea js-form-input js-textarea" placeholder="${placeholder.text}" name="${name.text}" autocomplete="off" required></textarea>
    <div class="form__footer">
      <div class="form-control">
        <button class="btn-control btn-control-form js-btn-form" type="${type.submit}">${buttonName.ready}</button>
        <button class="btn-control btn-control-form js-button-reset" type="${type.button}">${buttonName.delete}</button>
      </div> 
      <div class="form-message hidden js-form-message">Заполните поля!</div> 
    </div>
  </form>`;

  const formEvent = document.createElement('div');
  formEvent.classList.add('day__form', 'js-day-form');
  formEvent.innerHTML = template;

  return formEvent;
};

// generation template popup
export const templatePopup = ({ type, buttonName, placeholder }) => {
  const template = `
  <div class="popup__inner">
      <button class="popup-button js-popup-button" type"${type.button}">
        <svg class="icon-svg--cross" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.54969 3.00004L5.88597 0.663692C6.03801 0.511722 6.03801 0.266008 5.88597 0.114038C5.734 -0.0379314 5.48829 -0.0379314 5.33632 0.114038L2.99996 2.45039L0.663685 0.114038C0.511644 -0.0379314 0.266001 -0.0379314 0.114031 0.114038C-0.0380103 0.266008 -0.0380103 0.511722 0.114031 0.663692L2.45031 3.00004L0.114031 5.33639C-0.0380103 5.48836 -0.0380103 5.73407 0.114031 5.88604C0.189767 5.96185 0.289348 5.99993 0.388858 5.99993C0.488368 5.99993 0.587878 5.96185 0.663685 5.88604L2.99996 3.54969L5.33632 5.88604C5.41212 5.96185 5.51163 5.99993 5.61114 5.99993C5.71065 5.99993 5.81016 5.96185 5.88597 5.88604C6.03801 5.73407 6.03801 5.48836 5.88597 5.33639L3.54969 3.00004Z" fill="black"></path>
        </svg>
      </button>  
      <form class="form-popup js-form" action="/" method="GET" novalidate>
          <input class="form__input popup__input js-from-input" type="${type.text}" placeholder="${placeholder.event}" autocomplete="off" name="text" required>
          <div class= "form-popup__popup-control popup-control">
            <button class="btn-control btn-control--create js-btn-create" type="${type.submit}">${buttonName.create}</button>
            <div class="form-popup__popup-message popup-message js-message">
              Формат: дд.мм.гггг, Заголовок, Участники, Описание
            </div>
          </div>
      </form>
  </div>`;

  const popup = document.createElement('div');
  popup.classList.add('popup', 'js-popup');
  popup.innerHTML = template;

  return popup;
};
