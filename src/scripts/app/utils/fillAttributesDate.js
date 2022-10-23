/* eslint-disable no-param-reassign */
import { date} from "./getDate";

export const getPrevYear = (mountName) => {
  if (mountName.textContent === "Январь") {
    const prevYear = date.getFullYear() - 1;
    return prevYear;
  }
  return date.getFullYear();
};

export const getNextYear = (mountName) => {
  if (mountName.textContent === "Декабрь") {
    const prevYear = date.getFullYear() + 1;
    return prevYear;
  }
  return date.getFullYear();
};

export const getNumberMonth = (monthNumber) => {
  if (monthNumber === 0) {
    monthNumber = 12;
    return monthNumber;
  } 

  if (monthNumber < 10) {
    const textNumberMount = `0${monthNumber}`;
    return textNumberMount;
  }

  if (monthNumber === 13) {
    monthNumber = 1;
    const textNumberMount = `0${monthNumber}`;
    return textNumberMount;
  }
    
  return monthNumber;
};

export const getNumberDay = (numberDay) => {
  if (numberDay < 10) {
    const textNumberDay = `0${numberDay}`;
    return textNumberDay;
  }
  return numberDay;
};