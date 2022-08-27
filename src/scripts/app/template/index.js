//generation template day
export const templateDay = (numberDay) => {
const template = ` 
<div class = 'day js-day'>
  <h4 class = 'day__head'>${numberDay}</h4>
  <div class = 'day__title'>
    <h4 class = 'day__title'></h4>
  </div>
  <div class = 'day__text'></div>
</div>`;

return template;
}

//generation template form day
export const form = ({type, img, placeholder, buttonName, name}) => {
  const template = `
  <img class="icon--cross icon--cross--form js-icon-event" src="${img}" alt="none">
  <form class="event__form form js-form" action="/" method="post">
    <input class="form__input event__input js-from-input" type="${type[0]}" placeholder="${placeholder[0]}" name="${name[0]}">
    <input class="form__input event__input js-from-input js-from-input-date" type="${type[0]}" placeholder="${placeholder[1]}" name="${name[1]}">
    <input class="form__input event__input js-from-input" type="${type[0]}" placeholder="${placeholder[2]}" name="${name[2]}">
    <textarea class="form__textarea js-form js-from-input js-textarea" placeholder="${placeholder[3]}" name="${name[3]}"></textarea>
    <div class="form-control">
      <button class="btn-control btn-control--form js-btn-event-form" type="${type[1]}">${buttonName[0]}</button>
      <button class="btn-control btn-control--form" type="${type[2]}">${buttonName[1]}</button>
    </div>
  </form>`;

  const formEvent = document.createElement(`div`);
  formEvent.classList.add(`event`, `event--active`);
  formEvent.innerHTML = template;
  
  return formEvent;
}
