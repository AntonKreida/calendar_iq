import {
  onFocusHandler,
  onReloadHandler,
  openPopupHandler,
  unlockPopupHandler,
  onCreateQuickEventHandler,
  prevMonthHandler,
  todayHandler,
  nextMonthHandler,
} from "./handlers/index.js";
import renderCal from "./calendar/index.js";
import showFormEventDay from "./modal/index.js";

// focus header input
const headerFormIcon = document.querySelector(`.js-header-from-icon`);
headerFormIcon.addEventListener(`click`, onFocusHandler);

// reload html
const reloadButton = document.querySelector(".js-btn-reload");
reloadButton.addEventListener(`click`, onReloadHandler);

// open popup
const pushButton = document.querySelector(`.js-btn-push`);
pushButton.addEventListener(`click`, openPopupHandler);

// unlock popup
const popupCross = document.querySelector(`.js-popup-cross`);
popupCross.addEventListener(`click`, unlockPopupHandler);

// create quick event
const createButton = document.querySelector(`.js-btn-create`);
createButton.addEventListener(`click`, onCreateQuickEventHandler);

//click month prev
const PrevButton = document.querySelector(`.js-btn-control-prev`);
PrevButton.addEventListener(`click`, prevMonthHandler);

//click mount today
const todayButton = document.querySelector(`.js-btn-control-today`);
todayButton.addEventListener(`click`, todayHandler);

//click mount next
const nextButton = document.querySelector(`.js-btn-control-next`);
nextButton.addEventListener(`click`, nextMonthHandler);

renderCal();
window.addEventListener(`DOMContentLoaded`, showFormEventDay());
