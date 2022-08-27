import {getDate, date} from "../utils/getDate";
import {templateDay , dayTemplate} from "../template";

const {month} = getDate();

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

  let nextDays = 7 - lastDayIndex;
  if (lastDayIndex === 0) {
    nextDays = 0;
  }

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

  const monthTitle = document.querySelector(".js-data-month");
  const yearTitle = document.querySelector(".js-data-year");
  const monthName = arrNameMonth[date.getMonth()];
  monthTitle.textContent = monthName;
  yearTitle.textContent = date.getFullYear();

  const monthDay = document.querySelector(`.calendar`);

  for (let x = firstDayIndex; x > 0; x--) {
    monthDay.innerHTML += templateDay([prevLastDay - x + 1]);
  }
 
  for (let i = 1; i <= lastDayMonth; i++) {
    monthDay.innerHTML += templateDay(i);
  }

  for (let j = 1; j <= nextDays; j++) {
    monthDay.innerHTML += templateDay(j);
  }

  const titleDay = document.querySelectorAll(`.day__head`);

  titleDay.forEach((person, i) => {
    if (i < 7) {
      person.prepend(document.createTextNode(`${arrNameDay[i]}, `));
    }
  });
};

export default renderCal;
