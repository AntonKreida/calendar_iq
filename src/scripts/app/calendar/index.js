/* eslint-disable import/no-cycle */
import { getDate, date } from "../utils/getDate";
import handlers from "../handlers/index";
import { templateDay } from "../template";
import {
  getNumberDay,
  getPrevYear,
  getNextYear,
  getNumberMonth,
} from "../utils/fillAttributesDate";

const { year, month, monthDay } = getDate();

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

  const nameMonthList = [
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

  const nameDayList = [
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
  const monthName = nameMonthList[date.getMonth()];
  monthTitle.textContent = monthName;
  yearTitle.textContent = date.getFullYear();

  const calendar = document.querySelector(".js-calendar");

  for (let x = firstDayIndex; x > 0; x -= 1) {
    calendar.innerHTML += templateDay([prevLastDay - x + 1]);
    const prevDay = calendar.lastChild;
    prevDay.dataset.day = `${getNumberDay(
      prevLastDay - x + 1
    )}.${getNumberMonth(Number(date.getMonth() - 1) + 1)}.${getPrevYear(
      monthTitle,
      x
    )}`;
    prevDay.classList.add("prev");
  }

  for (let i = 1; i <= lastDayMonth; i += 1) {
    calendar.innerHTML += templateDay(i);
    const currentDay = calendar.lastChild;
    currentDay.dataset.day = `${getNumberDay(i)}.${getNumberMonth(
      Number(date.getMonth()) + 1
    )}.${date.getFullYear()}`;
  }

  for (let j = 1; j <= nextDays; j += 1) {
    calendar.innerHTML += templateDay(j);
    const nextDay = calendar.lastChild;
    nextDay.dataset.day = `${getNumberDay(j)}.${getNumberMonth(
      Number(date.getMonth() + 1) + 1
    )}.${getNextYear(monthTitle)}`;
    nextDay.classList.add("next");
  }

  const titleDay = document.querySelectorAll(".js-day-head");

  titleDay.forEach((person, i) => {
    if (i < 7) {
      person.prepend(document.createTextNode(`${nameDayList[i]}, `));
    }
  });

  const today = `${monthDay}.${month + 1}.${year}`;
  const monthDays = document.querySelectorAll(".js-day");
  monthDays.forEach((day) => {
    if (day.dataset.day === today) {
      day.classList.add("current");
    }
  });

  handlers.renderSaveDay();
};

export default renderCal;
