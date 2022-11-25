import renderCal from './calendar/index';
import handlers from './handlers/index';

const loaderScript = () => {
  // focus header input
  const headerFormIcon = document.querySelector('.js-header-from-icon');
  headerFormIcon.addEventListener('click', handlers.onFocusHandler);

  // reload html
  const reloadButton = document.querySelector('.js-btn-reload');
  reloadButton.addEventListener('click', handlers.onReloadHandler);

  // popup
  const pushButton = document.querySelector('.js-btn-push');
  pushButton.addEventListener('click', handlers.popupHandler);

  // click month prev
  const PrevButton = document.querySelector('.js-btn-control-prev');
  PrevButton.addEventListener('click', handlers.prevMonthHandler);

  // click mount today
  const todayButton = document.querySelector('.js-btn-control-today');
  todayButton.addEventListener('click', handlers.todayHandler);

  // click mount next
  const nextButton = document.querySelector('.js-btn-control-next');
  nextButton.addEventListener('click', handlers.nextMonthHandler);

  // show form day
  const calendar = document.querySelector('.js-calendar');
  calendar.addEventListener('click', handlers.showEventForm);

  // init suggest
  handlers.initSuggest();

  renderCal();
};

window.addEventListener('DOMContentLoaded', loaderScript);
