import "../css/main.scss";
import icon from "../assist/images/header/icon_cross.svg";



window.onload = function () {

  // focus header input
  const headerFormIcon = document.querySelector(`.js-form-header-icon`);
  const HeaderFormInput = document.querySelector(`.js-from-input`);
  const onFocusHandler = (event) => {
    HeaderFormInput.focus();
  };

  headerFormIcon.addEventListener(`click`, onFocusHandler);

  // reload html
  const reloadButton = document.querySelector(`.js-btn-reload`);
  const onReloadHandler = (event) => {
    const location = window.location;
    location.reload();
  };

  reloadButton.addEventListener(`click`, onReloadHandler);
  
  // open popup
  const popup = document.querySelector(`.js-popup`);
  const pushButton = document.querySelector(`.js-btn-push`);
  const onClasssAddHandler = (event) => {
    pushButton.classList.add(`btn--active`);
    popup.classList.add(`popup--active`);
  };

  pushButton.addEventListener(`click`, onClasssAddHandler);
  
  // onlock popup
  const popupIcon = document.querySelector(`.js-popup-icon`);
  const onClassRemoveHandler = (event) => {
    pushButton.classList.remove(`btn--active`);
    popup.classList.remove(`popup--active`);
  }

  popupIcon.addEventListener(`click`, onClassRemoveHandler);
  
  // create quick event
  const createButton = document.querySelector(`.js-btn-create`);
  const onCreateQuickEventHandler = (event) => {
      pushButton.classList.remove(`btn--active`);
      popup.classList.remove(`popup--active`);
  }

  createButton.addEventListener(`click`, onCreateQuickEventHandler);
  

  // render Caledrar
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const renderCal = () => {
      date.setDate(month);
  
      const lastDayMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
      const firstDayIndex = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDay();
      const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();
      const nextDays = 7 - lastDayIndex;
      const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();
  
      const arrNameMonth = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
  
      const arrNameDay = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота ",
        "Воскресенье",
      ];
  
      const spanMonth = document.querySelector(".js-data-month");
      const spanYear = document.querySelector(".js-data-year");
      const moutName = arrNameMonth[date.getMonth()];
      spanMonth.textContent = moutName;
      spanYear.textContent = date.getFullYear();
  
      const monthDay = document.querySelector(`.calendar__days`);
      let days = "";
  
      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="day day--prev js-day"><h4 class="day__head">${
          prevLastDay - x + 1
        }</h4><div class="day-title"><h4><div class="day-text"><p></div></div><div class="event"></div></div>`;
      }
  
      for (let i = 1; i <= lastDayMonth; i++) {
        days += `<div class="day day--cur js-day"><h4 class="day__head">${i}</h4><div class="day__title"><h4></div><div class="day__text"><p></div><div class="event"></div></div>`;
      }
  
      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day day--next js-day"><h4 class="day__head">${j}</h4><div class="day-title"><h4><div class="day-text"><p></div></div><div class="event"></div></div>`;
        monthDay.innerHTML = days;
      }
  
      let titleDay = document.querySelectorAll(`.day__head`);

      titleDay.forEach( (person, i) => {
        if (i < 7) {
          person.prepend(document.createTextNode(`${arrNameDay[i]}, `));
        }
      });
  };

  //click mout prev
  const PrevButton = document.querySelector(`.js-btn-control-prev`);
  const onPrevMountHendler = (event) => {
      date.setMonth(date.getMonth() - 1);
      renderCal();
      clickDay();
    };
  PrevButton.addEventListener(`click`, onPrevMountHendler);



  // click day
  const clickDay = () => {
    const dayElement = document.querySelectorAll(`.js-day`);
    dayElement.forEach((person) => {
      
      const onShowDayHandler = () => {
        person.classList.add("day--active");
        
        const eventFormRemove = document.querySelectorAll(`.event`);
        eventFormRemove.forEach((element) => {
          if (element.classList.contains(`event--active`)) {
            element.classList.remove(`event--active`);
          }
        });
        
        const eventFormActive = person.querySelector(`.event`);
        eventFormActive.classList.add(`event--active`);
        
        const arrEventForm = [
          `<img class="icon--cross icon--cross--form js-icon-event" src="./img/icon_cross.svg" alt="">`,
          `<form class="event__form form" action="/" method="post">
          <input class="form__input event__input" type="text" placeholder="Событие..." name="event">
          <input class="form__input event__input" type="text" placeholder="День, месяц, год..." name="Date">
          <input class="form__input event__input" type="text" placeholder ="Имена участников..." name="nameMembers">
          <textarea class="form__textarea" placeholder="Описание..." name="text"></textarea>
          <div class="form-control">
          <button class="btn-control btn-control--form js-btn-event-form" type="button">Готово</button>
          <button class="btn-control btn-control--form" type="reset">Удалить</button>
          </div>
          </form>`,
        ];
      
        const eventTegs = arrEventForm.reduce((string, element) => {
          return string + element;
        },"")
        eventFormActive.innerHTML = eventTegs;

        const buttonEventForm = document.querySelectorAll(`.js-btn-event-form`);
        const onUnlockButton = () => {
          eventFormActive.classList.remove(`event--active`);
          person.classList.remove(`day--active`);
        };
        buttonEventForm.forEach(element => {
          element.addEventListener(`click`, onUnlockButton);
        });
        
        const iconEventForm = document.querySelectorAll(`.js-icon-event`);
        const onUnlockIcon = () => {
          eventFormActive.classList.remove("event--active");
          person.classList.remove("day--active");
        };
        iconEventForm.forEach(element => {
          element.addEventListener(`click`, onUnlockIcon);
        });
        
        eventFormActive.addEventListener(`click`, function (event) {
          event.stopPropagation();
        });
      };
      
      person.addEventListener(`click`, onShowDayHandler)
    }); 
  };

  //click mout todye
  const todyeButton = document.querySelector(`.js-btn-control-todye`);
  const onTodayHadler = (event) => {
      date.setMonth(month);
      date.setFullYear(year);
      renderCal();
      clickDay();
    };
  todyeButton.addEventListener(`click`, onTodayHadler);

  //click mout next
  const nextButton = document.querySelector(`.js-btn-control-next`);
  const onNextHandler = (event) => {
    date.setMonth(date.getMonth() + 1);
    renderCal();
    clickDay();
  }
  nextButton.addEventListener(`click`, onNextHandler);
    
  renderCal();
  clickDay();
  
  // click day
};

