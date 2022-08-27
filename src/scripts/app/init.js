import handlers from "./handlers/index.js";
import renderCal from "./calendar/index.js";
import { dayHandler} from "./modal/index.js";


const loaderScript = () => {
  // focus header input
const headerFormIcon = document.querySelector(`.js-header-from-icon`);
headerFormIcon.addEventListener(`click`, handlers.onFocusHandler);

// reload html
const reloadButton = document.querySelector(".js-btn-reload");
reloadButton.addEventListener(`click`, handlers.onReloadHandler);

// open popup
const pushButton = document.querySelector(`.js-btn-push`);
pushButton.addEventListener(`click`, handlers.openPopupHandler);

// unlock popup
const popupCross = document.querySelector(`.js-popup-cross`);
popupCross.addEventListener(`click`, handlers.unlockPopupHandler);

// create quick event
const createButton = document.querySelector(`.js-btn-create`);
createButton.addEventListener(`click`, handlers.onCreateQuickEventHandler);

//click month prev
const PrevButton = document.querySelector(`.js-btn-control-prev`);
PrevButton.addEventListener(`click`, handlers.prevMonthHandler);

//click mount today
const todayButton = document.querySelector(`.js-btn-control-today`);
todayButton.addEventListener(`click`, handlers.todayHandler);

//click mount next
const nextButton = document.querySelector(`.js-btn-control-next`);
nextButton.addEventListener(`click`, handlers.nextMonthHandler);


const calendar = document.querySelector(`.calendar__days`);
calendar.addEventListener(`click`, handlers.showEventForm);

renderCal();
};

window.addEventListener(`DOMContentLoaded`, loaderScript);