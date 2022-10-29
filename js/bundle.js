/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://calendar-test/./src/style/main.scss?");

/***/ }),

/***/ "./src/scripts/app/calendar/index.js":
/*!*******************************************!*\
  !*** ./src/scripts/app/calendar/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDate */ \"./src/scripts/app/utils/getDate.js\");\n/* harmony import */ var _handlers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/index */ \"./src/scripts/app/handlers/index.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template */ \"./src/scripts/app/template/index.js\");\n/* harmony import */ var _utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fillAttributesDate */ \"./src/scripts/app/utils/fillAttributesDate.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\n\r\nconst { year, month, monthDay } = (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.getDate)();\r\n\r\nconst renderCal = () => {\r\n  _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.setDate(month);\r\n\r\n  const lastDayMonth = new Date(\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear(),\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getMonth() + 1,\r\n    0\r\n  ).getDate();\r\n  const firstDayIndex = new Date(\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear(),\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getMonth(),\r\n    0\r\n  ).getDay();\r\n  const lastDayIndex = new Date(\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear(),\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getMonth() + 1,\r\n    0\r\n  ).getDay();\r\n\r\n  let nextDays = 7 - lastDayIndex;\r\n  if (lastDayIndex === 0) {\r\n    nextDays = 0;\r\n  }\r\n\r\n  const prevLastDay = new Date(\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear(),\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getMonth(),\r\n    0\r\n  ).getDate();\r\n\r\n  const nameMonthList = [\r\n    \"Январь\",\r\n    \"Февраль\",\r\n    \"Март\",\r\n    \"Апрель\",\r\n    \"Май\",\r\n    \"Июнь\",\r\n    \"Июль\",\r\n    \"Август\",\r\n    \"Сентябрь\",\r\n    \"Октябрь\",\r\n    \"Ноябрь\",\r\n    \"Декабрь\",\r\n  ];\r\n\r\n  const nameDayList = [\r\n    \"Понедельник\",\r\n    \"Вторник\",\r\n    \"Среда\",\r\n    \"Четверг\",\r\n    \"Пятница\",\r\n    \"Суббота \",\r\n    \"Воскресенье\",\r\n  ];\r\n\r\n  const monthTitle = document.querySelector(\".js-data-month\");\r\n  const yearTitle = document.querySelector(\".js-data-year\");\r\n  const monthName = nameMonthList[_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getMonth()];\r\n  monthTitle.textContent = monthName;\r\n  yearTitle.textContent = _utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear();\r\n\r\n  const calendar = document.querySelector(\".js-calendar\");\r\n\r\n  for (let x = firstDayIndex; x > 0; x -= 1) {\r\n    calendar.innerHTML += (0,_template__WEBPACK_IMPORTED_MODULE_2__.templateDay)([prevLastDay - x + 1]);\r\n    const prevDay = calendar.lastChild;\r\n    prevDay.dataset.day = `${(0,_utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__.getNumberDay)(\r\n      prevLastDay - x + 1\r\n    )}.${(0,_utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__.getNumberMonth)(Number(_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getMonth() - 1) + 1)}.${(0,_utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__.getPrevYear)(\r\n      monthTitle,\r\n      x\r\n    )}`;\r\n    prevDay.classList.add(\"prev\");\r\n  }\r\n\r\n  for (let i = 1; i <= lastDayMonth; i += 1) {\r\n    calendar.innerHTML += (0,_template__WEBPACK_IMPORTED_MODULE_2__.templateDay)(i);\r\n    const currentDay = calendar.lastChild;\r\n    currentDay.dataset.day = `${(0,_utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__.getNumberDay)(i)}.${(0,_utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__.getNumberMonth)(\r\n      Number(_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getMonth()) + 1\r\n    )}.${_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear()}`;\r\n  }\r\n\r\n  for (let j = 1; j <= nextDays; j += 1) {\r\n    calendar.innerHTML += (0,_template__WEBPACK_IMPORTED_MODULE_2__.templateDay)(j);\r\n    const nextDay = calendar.lastChild;\r\n    nextDay.dataset.day = `${(0,_utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__.getNumberDay)(j)}.${(0,_utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__.getNumberMonth)(\r\n      Number(_utils_getDate__WEBPACK_IMPORTED_MODULE_0__.date.getMonth() + 1) + 1\r\n    )}.${(0,_utils_fillAttributesDate__WEBPACK_IMPORTED_MODULE_3__.getNextYear)(monthTitle)}`;\r\n    nextDay.classList.add(\"next\");\r\n  }\r\n\r\n  const titleDay = document.querySelectorAll(\".js-day-head\");\r\n\r\n  titleDay.forEach((person, i) => {\r\n    if (i < 7) {\r\n      person.prepend(document.createTextNode(`${nameDayList[i]}, `));\r\n    }\r\n  });\r\n\r\n  const today = `${monthDay}.${month + 1}.${year}`;\r\n  const monthDays = document.querySelectorAll(\".js-day\");\r\n  monthDays.forEach((day) => {\r\n    if (day.dataset.day === today) {\r\n      day.classList.add(\"current\");\r\n    }\r\n  });\r\n\r\n  _handlers_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderSaveDay();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCal);\r\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/calendar/index.js?");

/***/ }),

/***/ "./src/scripts/app/class/suggest.js":
/*!******************************************!*\
  !*** ./src/scripts/app/class/suggest.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _template_templateEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template/templateEngine */ \"./src/scripts/app/template/templateEngine.js\");\n/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getDate */ \"./src/scripts/app/utils/getDate.js\");\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar */ \"./src/scripts/app/calendar/index.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\nclass Suggest {\r\n  constructor(element, option) {\r\n    if (!(element instanceof HTMLElement)) {\r\n      throw new Error(\"Это не HTML элемент!\");\r\n    }\r\n\r\n    this.element = element;\r\n    this.suggestData = option;\r\n    this.ListTitle = this.suggestData.map((item) => item.title);\r\n\r\n    this.onInput = this.onInput.bind(this);\r\n    this.renderSuggest = this.renderSuggest.bind(this);\r\n    this.clickSuggest = this.clickSuggest.bind(this);\r\n    this.clickInput = this.clickInput.bind(this);\r\n\r\n    this.element.addEventListener(\"click\", this.clickInput);\r\n    this.element.addEventListener(\"input\", this.onInput);\r\n  }\r\n\r\n  onInput() {\r\n    if (this.element.value === \"\") {\r\n      this.removeSuggest();\r\n      window.addEventListener(\"resize\", () => {\r\n        this.removeSuggest();\r\n      });\r\n      return;\r\n    }\r\n\r\n    this.filterData = this.ListTitle.filter((item) =>\r\n      item.toLowerCase().startsWith(this.element.value.toLowerCase())\r\n    );\r\n\r\n    if (this.filterData.length) {\r\n      this.removeSuggest();\r\n      this.renderSuggest(this.filterData);\r\n\r\n      window.addEventListener(\"resize\", () => {\r\n        this.removeSuggest();\r\n        this.renderSuggest(this.filterData);\r\n      });\r\n    } else {\r\n      this.removeSuggest();\r\n    }\r\n  }\r\n\r\n  renderSuggest(data) {\r\n    this.clearSuggest();\r\n    if (this.filterData === null) {\r\n      return;\r\n    }\r\n    this.suggest = (0,_template_templateEngine__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Suggest.template(data));\r\n    const coord = this.element.getBoundingClientRect();\r\n    const { left, bottom, width } = coord;\r\n\r\n    this.suggest.style.top = `${bottom + window.scrollY + 20}px`;\r\n    this.suggest.style.left = `${left + window.scrollX}px`;\r\n    this.suggest.style.width = `${width}px`;\r\n    document.body.appendChild(this.suggest);\r\n\r\n    this.suggest.addEventListener(\"click\", this.clickSuggest);\r\n  }\r\n\r\n  clearSuggest() {\r\n    if (!this.suggest) {\r\n      return;\r\n    }\r\n\r\n    this.suggest.innerHTML = \"\";\r\n  }\r\n\r\n  removeSuggest() {\r\n    if (!this.suggest) {\r\n      return;\r\n    }\r\n\r\n    this.suggest.remove();\r\n    this.suggest = undefined;\r\n  }\r\n\r\n  clickSuggest(event) {\r\n    const { target } = event;\r\n    const input = document.querySelector(\".js-from-input\");\r\n    const suggest = document.querySelector(\".js-suggest\");\r\n    const calendar = document.querySelector(\".js-calendar\");\r\n    const days = document.querySelectorAll(\".js-day\");\r\n\r\n    input.value = target.textContent;\r\n    let searchData;\r\n\r\n    this.suggestData.forEach((item) => {\r\n      // eslint-disable-next-line no-restricted-syntax\r\n      for (const key in item) {\r\n        if (item[key] === target.textContent) {\r\n          // eslint-disable-next-line no-shadow\r\n          searchData = item.data.split(\".\").map((item) => Number(item));\r\n        }\r\n      }\r\n    });\r\n\r\n    this.filterData = null;\r\n    suggest.remove();\r\n\r\n    days.forEach((day) => {\r\n      calendar.removeChild(day);\r\n    });\r\n\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_1__.date.setFullYear(searchData[2]);\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_1__.date.setMonth(searchData[1] - 1);\r\n    (0,_calendar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  }\r\n\r\n  clickInput() {\r\n    this.element.value = \"\";\r\n  }\r\n}\r\n\r\nSuggest.template = (suggests) => ({\r\n  tag: \"div\",\r\n  cls: [\"suggest\", \"js-suggest\"],\r\n  content: suggests.map((suggest) => ({\r\n    tag: \"div\",\r\n    cls: [\"suggest__item\", \"js-item\"],\r\n    content: suggest,\r\n  })),\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Suggest);\r\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/class/suggest.js?");

/***/ }),

/***/ "./src/scripts/app/handlers/index.js":
/*!*******************************************!*\
  !*** ./src/scripts/app/handlers/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calendar_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar/index */ \"./src/scripts/app/calendar/index.js\");\n/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getDate */ \"./src/scripts/app/utils/getDate.js\");\n/* harmony import */ var _utils_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/attributes */ \"./src/scripts/app/utils/attributes.js\");\n/* harmony import */ var _modal_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/index */ \"./src/scripts/app/modal/index.js\");\n/* harmony import */ var _template_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template/index */ \"./src/scripts/app/template/index.js\");\n/* harmony import */ var _class_suggest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class/suggest */ \"./src/scripts/app/class/suggest.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst { month, year } = (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_1__.getDate)();\r\nconst calendar = document.querySelector(\".js-calendar\");\r\n\r\nconst handlers = {\r\n  onFocusHandler() {\r\n    const HeaderFormInput = document.querySelector(\".js-from-input\");\r\n    HeaderFormInput.focus();\r\n  },\r\n  onReloadHandler() {\r\n    const { location } = window;\r\n    location.reload();\r\n  },\r\n  popupHandler(event) {\r\n    const { target } = event;\r\n    const parent = target.closest(\".js-header-buttons\");\r\n    parent.appendChild((0,_template_index__WEBPACK_IMPORTED_MODULE_4__.templatePopup)(_utils_attributes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\r\n    target.setAttribute(\"disabled\", \"disabled\");\r\n\r\n    const popupForm = parent.lastChild;\r\n    const buttonPopupClose = popupForm.querySelector(\".js-popup-button\");\r\n    const buttonPopupCreate = popupForm.querySelector(\".js-btn-create\");\r\n    buttonPopupClose.addEventListener(\"click\", handlers.unlockPopup);\r\n    buttonPopupCreate.addEventListener(\"click\", handlers.unlockPopup);\r\n  },\r\n  prevMonthHandler() {\r\n    const days = document.querySelectorAll(\".js-day\");\r\n    days.forEach((day) => {\r\n      calendar.removeChild(day);\r\n    });\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_1__.date.setMonth(_utils_getDate__WEBPACK_IMPORTED_MODULE_1__.date.getMonth() - 1);\r\n    (0,_calendar_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  },\r\n  todayHandler() {\r\n    const days = document.querySelectorAll(\".js-day\");\r\n    days.forEach((day) => {\r\n      calendar.removeChild(day);\r\n    });\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_1__.date.setMonth(month);\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_1__.date.setFullYear(year);\r\n    (0,_calendar_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  },\r\n  nextMonthHandler() {\r\n    const days = document.querySelectorAll(\".js-day\");\r\n    days.forEach((day) => {\r\n      calendar.removeChild(day);\r\n    });\r\n    _utils_getDate__WEBPACK_IMPORTED_MODULE_1__.date.setMonth(_utils_getDate__WEBPACK_IMPORTED_MODULE_1__.date.getMonth() + 1);\r\n    (0,_calendar_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  },\r\n  showEventForm(event) {\r\n    const target = event.target.closest(\".js-day\");\r\n    if (!target.classList.contains(\"js-day\")) {\r\n      return;\r\n    }\r\n    (0,_modal_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target);\r\n  },\r\n  unlockEventForm(event) {\r\n    const { target } = event;\r\n    const parent = target.closest(\".js-day\");\r\n    parent.classList.remove(\"active\");\r\n    parent.classList.remove(\"block\");\r\n    parent.removeChild(parent.lastChild);\r\n    handlers.checkDay(parent);\r\n    handlers.resetLocalElement(parent);\r\n\r\n    handlers.initSuggest();\r\n  },\r\n  stopAscent(event) {\r\n    event.stopPropagation();\r\n  },\r\n\r\n  unlockPopup(event) {\r\n    const { target } = event;\r\n    const parent = target.closest(\".js-header-buttons\");\r\n    const button = parent.querySelector(\".js-btn-push\");\r\n\r\n    button.removeAttribute(\"disabled\");\r\n    parent.removeChild(parent.lastChild);\r\n  },\r\n\r\n  resetFormDay(event) {\r\n    const target = event.target.closest(\".js-day\");\r\n\r\n    const inputTitle = document.querySelector(\".js-input-title\");\r\n    const inputParty = document.querySelector(\".js-input-party\");\r\n    const textarea = document.querySelector(\".js-textarea\");\r\n\r\n    const dayTitle = target.querySelector(\".js-title\");\r\n    const daySubtitle = target.querySelector(\".js-subtitle\");\r\n    const dayText = target.querySelector(\".js-text\");\r\n\r\n    inputTitle.removeAttribute(\"value\");\r\n    inputParty.removeAttribute(\"value\");\r\n\r\n    inputTitle.value = \"\";\r\n    inputParty.value = \"\";\r\n    textarea.value = \"\";\r\n    textarea.textContent = \"\";\r\n\r\n    dayTitle.textContent = \"\";\r\n    daySubtitle.textContent = \"\";\r\n    dayText.textContent = \"\";\r\n  },\r\n\r\n  checkDay(target) {\r\n    const dayTitle = target.querySelector(\".js-title\");\r\n    const daySubtitle = target.querySelector(\".js-subtitle\");\r\n    const dayText = target.querySelector(\".js-text\");\r\n\r\n    if (\r\n      dayTitle.textContent.length > 0 ||\r\n      daySubtitle.textContent.length > 0 ||\r\n      dayText.textContent.length > 0\r\n    ) {\r\n      target.classList.add(\"valid\");\r\n    } else {\r\n      target.classList.remove(\"valid\");\r\n    }\r\n  },\r\n\r\n  saveLocalElement(target) {\r\n    const dayTitle = target.querySelector(\".js-title\");\r\n    const daySubtitle = target.querySelector(\".js-subtitle\");\r\n    const dayText = target.querySelector(\".js-text\");\r\n\r\n    if (\r\n      dayTitle.textContent.length > 0 ||\r\n      daySubtitle.textContent.length > 0 ||\r\n      dayText.textContent.length > 0\r\n    ) {\r\n      const dataDay = target.dataset.day;\r\n      const html = target.innerHTML;\r\n      const saveDay = {\r\n        title: dayTitle.textContent,\r\n        data: dataDay,\r\n        html,\r\n      };\r\n\r\n      localStorage.setItem(dataDay, JSON.stringify(saveDay));\r\n    }\r\n  },\r\n\r\n  resetLocalElement(target) {\r\n    const dayTitle = target.querySelector(\".js-title\");\r\n    const daySubtitle = target.querySelector(\".js-subtitle\");\r\n    const dayText = target.querySelector(\".js-text\");\r\n\r\n    if (\r\n      dayTitle.textContent.length === 0 ||\r\n      daySubtitle.textContent.length === 0 ||\r\n      dayText.textContent.length === 0\r\n    ) {\r\n      const dataDay = target.dataset.day;\r\n      localStorage.removeItem(dataDay);\r\n    }\r\n  },\r\n\r\n  renderSaveDay() {\r\n    const days = document.querySelectorAll(\".js-day\");\r\n\r\n    days.forEach((elem) => {\r\n      if (localStorage.getItem(elem.dataset.day) !== null) {\r\n        const itemDay = JSON.parse(localStorage.getItem(elem.dataset.day));\r\n        // eslint-disable-next-line no-param-reassign\r\n        elem.innerHTML = itemDay.html;\r\n      }\r\n\r\n      const dayTitle = elem.querySelector(\".js-title\");\r\n      const daySubtitle = elem.querySelector(\".js-subtitle\");\r\n      const dayText = elem.querySelector(\".js-text\");\r\n\r\n      if (\r\n        dayTitle.textContent.length > 0 ||\r\n        daySubtitle.textContent.length > 0 ||\r\n        dayText.textContent.length > 0\r\n      ) {\r\n        elem.classList.add(\"valid\");\r\n      } else {\r\n        elem.classList.remove(\"valid\");\r\n      }\r\n    });\r\n  },\r\n\r\n  initSuggest() {\r\n    const inputNav = document.querySelector(\".js-from-input\");\r\n    const listDay = Object.values(localStorage);\r\n    const listDayTitle = [];\r\n    listDay.forEach((item) => {\r\n      listDayTitle.push(JSON.parse(item));\r\n    });\r\n    // eslint-disable-next-line no-unused-vars\r\n    const suggest = new _class_suggest__WEBPACK_IMPORTED_MODULE_5__[\"default\"](inputNav, listDayTitle);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\r\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/handlers/index.js?");

/***/ }),

/***/ "./src/scripts/app/init.js":
/*!*********************************!*\
  !*** ./src/scripts/app/init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handlers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/index */ \"./src/scripts/app/handlers/index.js\");\n/* harmony import */ var _calendar_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/index */ \"./src/scripts/app/calendar/index.js\");\n\r\n\r\n\r\nconst loaderScript = () => {\r\n  // focus header input\r\n  const headerFormIcon = document.querySelector(\".js-header-from-icon\");\r\n  headerFormIcon.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onFocusHandler);\r\n\r\n  // reload html\r\n  const reloadButton = document.querySelector(\".js-btn-reload\");\r\n  reloadButton.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onReloadHandler);\r\n\r\n  // popup\r\n  const pushButton = document.querySelector(\".js-btn-push\");\r\n  pushButton.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].popupHandler);\r\n\r\n  // click month prev\r\n  const PrevButton = document.querySelector(\".js-btn-control-prev\");\r\n  PrevButton.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prevMonthHandler);\r\n\r\n  // click mount today\r\n  const todayButton = document.querySelector(\".js-btn-control-today\");\r\n  todayButton.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todayHandler);\r\n\r\n  // click mount next\r\n  const nextButton = document.querySelector(\".js-btn-control-next\");\r\n  nextButton.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextMonthHandler);\r\n\r\n  // show form day\r\n  const calendar = document.querySelector(\".js-calendar\");\r\n  calendar.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showEventForm);\r\n\r\n  // init suggest\r\n  _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initSuggest();\r\n\r\n  (0,_calendar_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", loaderScript);\r\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/init.js?");

/***/ }),

/***/ "./src/scripts/app/modal/index.js":
/*!****************************************!*\
  !*** ./src/scripts/app/modal/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template */ \"./src/scripts/app/template/index.js\");\n/* harmony import */ var _handlers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/index */ \"./src/scripts/app/handlers/index.js\");\n/* harmony import */ var _utils_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/attributes */ \"./src/scripts/app/utils/attributes.js\");\n/* harmony import */ var _validator_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator/index */ \"./src/scripts/app/validator/index.js\");\n/* harmony import */ var _modal_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.input */ \"./src/scripts/app/modal/modal.input.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst showFormDay = (targetDay) => {\r\n  if (targetDay.classList.contains(\"active\")) {\r\n    targetDay.classList.remove(\"active\", \"block\");\r\n    targetDay.removeChild(targetDay.lastChild);\r\n  } else if (!targetDay.classList.contains(\"active\")) {\r\n    const days = document.querySelectorAll(\".js-day\");\r\n    days.forEach((day) => {\r\n      if (day.classList.contains(\"active\")) {\r\n        day.classList.remove(\"active\", \"block\");\r\n        day.removeChild(day.lastChild);\r\n      }\r\n    });\r\n\r\n    targetDay.classList.add(\"active\", \"block\");\r\n    targetDay.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateFormDay)(_utils_attributes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\r\n\r\n    (0,_validator_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_modal_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(targetDay);\r\n    _handlers_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkDay(targetDay);\r\n\r\n    const iconEventForm = targetDay.querySelector(\".js-btn-form-closest\");\r\n    iconEventForm.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].unlockEventForm);\r\n\r\n    const eventForm = targetDay.querySelector(\".js-day-form\");\r\n    eventForm.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stopAscent);\r\n\r\n    const buttonReset = targetDay.querySelector(\".js-button-reset\");\r\n    buttonReset.addEventListener(\"click\", _handlers_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetFormDay);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showFormDay);\r\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/modal/index.js?");

/***/ }),

/***/ "./src/scripts/app/modal/modal.input.js":
/*!**********************************************!*\
  !*** ./src/scripts/app/modal/modal.input.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fillInputDate = (element) => {\r\n  const inputData = element.querySelector(\".js-input-data\");\r\n  const dataDay = element.dataset.day;\r\n  inputData.setAttribute(\"value\", dataDay);\r\n\r\n  const inputTitle = element.querySelector(\".js-input-title\");\r\n  const inputParty = element.querySelector(\".js-input-party\");\r\n  const textarea = element.querySelector(\".js-textarea\");\r\n  const dayTitle = element.querySelector(\".js-title\");\r\n  const daySubtitle = element.querySelector(\".js-subtitle\");\r\n  const dayText = element.querySelector(\".js-text\");\r\n\r\n  inputTitle.setAttribute(\"value\", dayTitle.textContent);\r\n  inputParty.setAttribute(\"value\", daySubtitle.textContent);\r\n  textarea.textContent = dayText.textContent;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillInputDate);\r\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/modal/modal.input.js?");

/***/ }),

/***/ "./src/scripts/app/template/index.js":
/*!*******************************************!*\
  !*** ./src/scripts/app/template/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"templateDay\": () => (/* binding */ templateDay),\n/* harmony export */   \"templateFormDay\": () => (/* binding */ templateFormDay),\n/* harmony export */   \"templatePopup\": () => (/* binding */ templatePopup)\n/* harmony export */ });\n/* eslint-disable max-len */\n// generation template day\nconst templateDay = (numberDay) => {\n  const template = ` \n<div class = 'day js-day'>\n  <h4 class = 'day__head js-day-head'>${numberDay}</h4>\n  <div class = 'day__title js-title' data-title = 'eventTitle'></div>\n  <div class = 'day__subtitle js-subtitle' data-subtitle = 'subtitle'></div>\n  <div class = 'day__text js-text' data-text = 'text'></div>\n</div>`;\n\n  return template;\n};\n\n// generation template form day\nconst templateFormDay = ({\n  type,\n  img,\n  placeholder,\n  buttonName,\n  name,\n}) => {\n  const template = `\n  <button class=\"btn-form-closest js-btn-form-closest\" type=\"button\">\n    <img class=\"icon-svg--cross\" src=\"${img}\" alt=\"none\">\n  </button>  \n  <form class=\"day__form-event form js-form\" action=\"/\" method=\"post\" novalidate>\n    <input class=\"form__input day__form-input js-form-input js-input-title\" type=\"${type.text}\" placeholder=\"${placeholder.event}\" name=\"${name.title}\" autocomplete=\"off\" required>\n    <input class=\"form__input day__form-input js-form-input js-input-data\" type=\"${type.text}\" placeholder=\"${placeholder.data}\" name=\"${name.data}\" readonly autocomplete=\"off\" required>\n    <input class=\"form__input day__form-input js-form-input js-input-party\" type=\"${type.text}\" placeholder=\"${placeholder.party}\" name=\"${name.party}\" autocomplete=\"off\" required>\n    <textarea class=\"form__textarea js-form-input js-textarea\" placeholder=\"${placeholder.text}\" name=\"${name.text}\" autocomplete=\"off\" required></textarea>\n    <div class=\"form__footer\">\n      <div class=\"form-control\">\n        <button class=\"btn-control btn-control-form js-btn-form\" type=\"${type.submit}\">${buttonName.ready}</button>\n        <button class=\"btn-control btn-control-form js-button-reset\" type=\"${type.button}\">${buttonName.delete}</button>\n      </div> \n      <div class=\"form-message hidden js-form-message\">Заполните поля!</div> \n    </div>\n  </form>`;\n\n  const formEvent = document.createElement(\"div\");\n  formEvent.classList.add(\"day__form\", \"js-day-form\");\n  formEvent.innerHTML = template;\n\n  return formEvent;\n};\n\nconst templatePopup = ({ type, buttonName, placeholder }) => {\n  const template = `\n  <div class=\"popup__inner\">\n      <button class=\"popup-button js-popup-button\" type\"${type.button}\">\n        <svg class=\"icon-svg--cross\" width=\"6\" height=\"6\" viewBox=\"0 0 6 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M3.54969 3.00004L5.88597 0.663692C6.03801 0.511722 6.03801 0.266008 5.88597 0.114038C5.734 -0.0379314 5.48829 -0.0379314 5.33632 0.114038L2.99996 2.45039L0.663685 0.114038C0.511644 -0.0379314 0.266001 -0.0379314 0.114031 0.114038C-0.0380103 0.266008 -0.0380103 0.511722 0.114031 0.663692L2.45031 3.00004L0.114031 5.33639C-0.0380103 5.48836 -0.0380103 5.73407 0.114031 5.88604C0.189767 5.96185 0.289348 5.99993 0.388858 5.99993C0.488368 5.99993 0.587878 5.96185 0.663685 5.88604L2.99996 3.54969L5.33632 5.88604C5.41212 5.96185 5.51163 5.99993 5.61114 5.99993C5.71065 5.99993 5.81016 5.96185 5.88597 5.88604C6.03801 5.73407 6.03801 5.48836 5.88597 5.33639L3.54969 3.00004Z\" fill=\"black\"></path>\n        </svg>\n      </button>  \n      <form class=\"text js-form\" action=\"/\" method=\"get\">\n          <input class=\"form__input popup__input js-from-input\" type=\"${type.text}\" placeholder=\"${placeholder.event}\" autocomplete=\"off\" name=\"text\">\n          <button class=\"btn-control btn-control--create js-btn-create\" type=\"${type.button}\">${buttonName.create}</button>\n      </form>\n  </div>`;\n\n  const popup = document.createElement(\"div\");\n  popup.classList.add(\"popup\", \"js-popup\");\n  popup.innerHTML = template;\n\n  return popup;\n};\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/template/index.js?");

/***/ }),

/***/ "./src/scripts/app/template/templateEngine.js":
/*!****************************************************!*\
  !*** ./src/scripts/app/template/templateEngine.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst templateEngine = (block) => {\r\n  if (block === undefined || block === false || block === null) {\r\n    return document.createTextNode(``);\r\n  }\r\n\r\n  if (\r\n    typeof block === `string` ||\r\n    typeof block === `number` ||\r\n    block === true\r\n  ) {\r\n    return document.createTextNode(block);\r\n  }\r\n\r\n  if (Array.isArray(block)) {\r\n    const fragment = document.createDocumentFragment();\r\n    block.forEach((item) => {\r\n      const element = templateEngine(item);\r\n      fragment.appendChild(element);\r\n    });\r\n    return fragment;\r\n  }\r\n\r\n  const elem = document.createElement(block.tag);\r\n\r\n  if (block.cls) {\r\n    elem.classList.add(...[].concat(block.cls).filter(Boolean));\r\n  }\r\n\r\n  if (block.attr) {\r\n    const keys = Object.keys(block.attr);\r\n    keys.forEach((key) => {\r\n      elem.setAttribute(key, block.attr[key]);\r\n    });\r\n  }\r\n\r\n  const content = templateEngine(block.content);\r\n  elem.appendChild(content);\r\n\r\n  return elem;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (templateEngine);\r\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/template/templateEngine.js?");

/***/ }),

/***/ "./src/scripts/app/utils/attributes.js":
/*!*********************************************!*\
  !*** ./src/scripts/app/utils/attributes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst attributes = {\n  type: {\n    text: \"text\",\n    button: \"button\",\n    reset: \"reset\",\n    submit: \"submit\",\n  },\n  img: \"./assets/icon_cross.svg\",\n  placeholder: {\n    event: \"Событие...\",\n    data:  \"День, месяц, год...\",\n    party:  \"Участники...\",\n    text: \"Описание...\",\n  },\n  name: {\n    title: \"eventTitle\",\n    data: \"eventDate\",\n    party: \"eventParty\",\n    text: \"eventText\",\n  },\n  buttonName: {\n    ready: \"Готово\",\n    delete: \"Удалить\",\n    create: \"Создать\",\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/utils/attributes.js?");

/***/ }),

/***/ "./src/scripts/app/utils/fillAttributesDate.js":
/*!*****************************************************!*\
  !*** ./src/scripts/app/utils/fillAttributesDate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNextYear\": () => (/* binding */ getNextYear),\n/* harmony export */   \"getNumberDay\": () => (/* binding */ getNumberDay),\n/* harmony export */   \"getNumberMonth\": () => (/* binding */ getNumberMonth),\n/* harmony export */   \"getPrevYear\": () => (/* binding */ getPrevYear)\n/* harmony export */ });\n/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ \"./src/scripts/app/utils/getDate.js\");\n/* eslint-disable no-param-reassign */\r\n\r\n\r\nconst getPrevYear = (mountName) => {\r\n  if (mountName.textContent === \"Январь\") {\r\n    const prevYear = _getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear() - 1;\r\n    return prevYear;\r\n  }\r\n  return _getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear();\r\n};\r\n\r\nconst getNextYear = (mountName) => {\r\n  if (mountName.textContent === \"Декабрь\") {\r\n    const prevYear = _getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear() + 1;\r\n    return prevYear;\r\n  }\r\n  return _getDate__WEBPACK_IMPORTED_MODULE_0__.date.getFullYear();\r\n};\r\n\r\nconst getNumberMonth = (monthNumber) => {\r\n  if (monthNumber === 0) {\r\n    monthNumber = 12;\r\n    return monthNumber;\r\n  } \r\n\r\n  if (monthNumber < 10) {\r\n    const textNumberMount = `0${monthNumber}`;\r\n    return textNumberMount;\r\n  }\r\n\r\n  if (monthNumber === 13) {\r\n    monthNumber = 1;\r\n    const textNumberMount = `0${monthNumber}`;\r\n    return textNumberMount;\r\n  }\r\n    \r\n  return monthNumber;\r\n};\r\n\r\nconst getNumberDay = (numberDay) => {\r\n  if (numberDay < 10) {\r\n    const textNumberDay = `0${numberDay}`;\r\n    return textNumberDay;\r\n  }\r\n  return numberDay;\r\n};\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/utils/fillAttributesDate.js?");

/***/ }),

/***/ "./src/scripts/app/utils/getDate.js":
/*!******************************************!*\
  !*** ./src/scripts/app/utils/getDate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"date\": () => (/* binding */ date),\n/* harmony export */   \"getDate\": () => (/* binding */ getDate)\n/* harmony export */ });\nconst getDate = () => {\n  const date = new Date();\n  const month = date.getMonth();\n  const year = date.getFullYear();\n  const monthDay = date.getDate();\n  const day = date.getDay();\n  return {\n    year,\n    month,\n    monthDay,\n    day,\n  };\n};\n\nconst date = new Date();\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/utils/getDate.js?");

/***/ }),

/***/ "./src/scripts/app/validator/index.js":
/*!********************************************!*\
  !*** ./src/scripts/app/validator/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handlers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/index */ \"./src/scripts/app/handlers/index.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\nconst checkValidForm = () => {\r\n  const formEvent = document.querySelector(\".js-form\");\r\n\r\n  formEvent.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n    const { target } = event;\r\n    const inputs = target.querySelectorAll(\".js-form-input\");\r\n    const message = target.querySelector(\".js-form-message\");\r\n\r\n    const day = target.closest(\".js-day\");\r\n\r\n    const dayTitle = day.querySelector(\".js-title\");\r\n    const daySubtitle = day.querySelector(\".js-subtitle\");\r\n    const dayText = day.querySelector(\".js-text\");\r\n\r\n    const inputTitle = target.querySelector(\".js-input-title\");\r\n    const inputParty = target.querySelector(\".js-input-party\");\r\n    const textarea = target.querySelector(\".js-textarea\");\r\n\r\n    inputs.forEach((input) => {\r\n      if (input.validity.valid) {\r\n        input.classList.remove(\"invalid\");\r\n        input.classList.add(\"valid\");\r\n      } else {\r\n        input.classList.add(\"invalid\");\r\n        input.classList.remove(\"valid\");\r\n      }\r\n    });\r\n\r\n    if (!target.checkValidity()) {\r\n      message.classList.remove(\"hidden\");\r\n      return;\r\n    }\r\n    message.classList.add(\"hidden\");\r\n\r\n    dayTitle.textContent = inputTitle.value;\r\n    daySubtitle.textContent = inputParty.value;\r\n    dayText.textContent = textarea.value;\r\n\r\n    _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unlockEventForm(event);\r\n    _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveLocalElement(day);\r\n    _handlers_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initSuggest();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkValidForm);\r\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/app/validator/index.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _assets_images_header_icon_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/header/icon_search.svg */ \"./src/assets/images/header/icon_search.svg\");\n/* harmony import */ var _assets_images_header_icon_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/header/icon_cross.svg */ \"./src/assets/images/header/icon_cross.svg\");\n/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/init */ \"./src/scripts/app/init.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://calendar-test/./src/scripts/index.js?");

/***/ }),

/***/ "./src/assets/images/header/icon_cross.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/header/icon_cross.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icon_cross.svg\";\n\n//# sourceURL=webpack://calendar-test/./src/assets/images/header/icon_cross.svg?");

/***/ }),

/***/ "./src/assets/images/header/icon_search.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/header/icon_search.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icon_search.svg\";\n\n//# sourceURL=webpack://calendar-test/./src/assets/images/header/icon_search.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;