/* eslint-disable max-len */
// generation template day
export const templateDay = (numberDay) => {
  const template = ` 
<div class = 'day js-day'>
  <h4 class = 'day__head js-day-head'>${numberDay}</h4>
  <div class = 'day__title'>
    <h4 class = 'day__title'></h4>
  </div>
  <div class = 'day__text'></div>
</div>`;

  return template;
};

// generation template form day
export const templateFormDay = ({ type, img, placeholder, buttonName, name,}) => {
  const template = `
  <button class="btn-form-closest js-btn-form-closest" type="button">
    <img class="icon-svg--cross" src="${img}" alt="none">
  </button>  
  <form class="day__form-event form js-form" action="/" method="post">
    <input class="form__input day__form-input js-from-input" type="${type[0]}" placeholder="${placeholder[0]}" name="${name[0]}">
    <input class="form__input day__form-input js-from-input" type="${type[0]}" placeholder="${placeholder[1]}" name="${name[1]}">
    <input class="form__input day__form-input js-from-input" type="${type[0]}" placeholder="${placeholder[2]}" name="${name[2]}">
    <textarea class="form__textarea js-textarea" placeholder="${placeholder[3]}" name="${name[3]}"></textarea>
    <div class="form-control">
      <button class="btn-control btn-control-form js-btn-form" type="${type[1]}">${buttonName[0]}</button>
      <button class="btn-control btn-control-form" type="${type[2]}">${buttonName[1]}</button>
    </div>
  </form>`;

  const formEvent = document.createElement("div");
  formEvent.classList.add("day__form", "js-day-form");
  formEvent.innerHTML = template;

  return formEvent;
};

export const templatePopup = ({ type, buttonName, placeholder }) => {
  const template = `
  <div class="popup__inner">
      <button class="popup-button js-popup-button" type"${type[1]}">
        <svg class="icon-svg--cross" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.54969 3.00004L5.88597 0.663692C6.03801 0.511722 6.03801 0.266008 5.88597 0.114038C5.734 -0.0379314 5.48829 -0.0379314 5.33632 0.114038L2.99996 2.45039L0.663685 0.114038C0.511644 -0.0379314 0.266001 -0.0379314 0.114031 0.114038C-0.0380103 0.266008 -0.0380103 0.511722 0.114031 0.663692L2.45031 3.00004L0.114031 5.33639C-0.0380103 5.48836 -0.0380103 5.73407 0.114031 5.88604C0.189767 5.96185 0.289348 5.99993 0.388858 5.99993C0.488368 5.99993 0.587878 5.96185 0.663685 5.88604L2.99996 3.54969L5.33632 5.88604C5.41212 5.96185 5.51163 5.99993 5.61114 5.99993C5.71065 5.99993 5.81016 5.96185 5.88597 5.88604C6.03801 5.73407 6.03801 5.48836 5.88597 5.33639L3.54969 3.00004Z" fill="black"></path>
        </svg>
      </button>  
      <form class="text js-form" action="/" method="get">
          <input class="form__input popup__input js-from-input" type="${type[0]}" placeholder="${placeholder[0]}" name="text">
          <button class="btn-control btn-control--create js-btn-create" type="${type[1]}">${buttonName[2]}</button>
      </form>
  </div>`;

  const popup = document.createElement("div");
  popup.classList.add("popup", "js-popup");
  popup.innerHTML = template;

  return popup;
};
