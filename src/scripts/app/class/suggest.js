/* eslint-disable import/no-cycle */
import templateEngine from "../template/templateEngine";
import { date } from "../utils/getDate";
import renderCal from "../calendar";

class Suggest {
  constructor(element, option) {
    if (!(element instanceof HTMLElement)) {
      throw new Error("Это не HTML элемент!");
    }

    this.element = element;
    this.suggestData = option;
    this.ListTitle = this.suggestData.map((item) => item.title);

    this.onInput = this.onInput.bind(this);
    this.renderSuggest = this.renderSuggest.bind(this);
    this.clickSuggest = this.clickSuggest.bind(this);
    this.clickInput = this.clickInput.bind(this);

    this.element.addEventListener("click", this.clickInput);
    this.element.addEventListener("input", this.onInput);
  }

  onInput() {
    if (this.element.value === "") {
      this.removeSuggest();
      this.clearSuggest();
      window.addEventListener("resize", () => {
        this.removeSuggest();
      });
      return;
    }

    this.filterData = this.ListTitle.filter((item) =>
      item.toLowerCase().startsWith(this.element.value.toLowerCase())
    );

    if (this.filterData.length) {
      this.removeSuggest();
      this.renderSuggest(this.filterData);

      window.addEventListener("resize", () => {
        this.removeSuggest();
        this.renderSuggest(this.filterData);
      });
    } else {
      this.removeSuggest();
    }
  }

  renderSuggest(data) {
    this.clearSuggest();
    if (this.filterData === null) {
      return;
    }
    this.suggest = templateEngine(Suggest.template(data));
    const coord = this.element.getBoundingClientRect();
    const { left, bottom, width } = coord;

    this.suggest.style.top = `${bottom + window.scrollY + 20}px`;
    this.suggest.style.left = `${left + window.scrollX}px`;
    this.suggest.style.width = `${width}px`;
    document.body.appendChild(this.suggest);

    this.suggest.addEventListener("click", this.clickSuggest);
  }

  clearSuggest() {
    if (!this.suggest) {
      return;
    }

    this.suggest.innerHTML = "";
  }

  removeSuggest() {
    if (!this.suggest) {
      return;
    }

    this.suggest.remove();
    this.suggest = undefined;
  }

  clickSuggest(event) {
    const { target } = event;
    const input = document.querySelector(".js-from-input");
    const suggest = document.querySelector(".js-suggest");
    const calendar = document.querySelector(".js-calendar");
    const days = document.querySelectorAll(".js-day");

    input.value = target.textContent;
    let searchData;

    this.suggestData.forEach((item) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in item) {
        if (item[key] === target.textContent) {
          // eslint-disable-next-line no-shadow
          searchData = item.data.split(".").map((item) => Number(item));
        }
      }
    });

    this.filterData = null;
    suggest.remove();

    days.forEach((day) => {
      calendar.removeChild(day);
    });

    date.setFullYear(searchData[2]);
    date.setMonth(searchData[1] - 1);
    renderCal();
  }

  clickInput() {
    this.element.value = "";
  }
}

Suggest.template = (suggests) => ({
  tag: "div",
  cls: ["suggest", "js-suggest"],
  content: suggests.map((suggest) => ({
    tag: "div",
    cls: ["suggest__item", "js-item"],
    content: suggest,
  })),
});

export default Suggest;
