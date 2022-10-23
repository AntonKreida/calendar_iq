const fillInputDate = (element) => {
  const inputData = element.querySelector(".js-input-data");
  const dataDay = element.dataset.day;
  inputData.setAttribute("value", dataDay);

  const inputTitle = element.querySelector(".js-input-title");
  const inputParty = element.querySelector(".js-input-party");
  const textarea = element.querySelector(".js-textarea");
  const dayTitle = element.querySelector(".js-title");
  const daySubtitle = element.querySelector(".js-subtitle");
  const dayText = element.querySelector(".js-text");

  inputTitle.setAttribute("value", dayTitle.textContent);
  inputParty.setAttribute("value", daySubtitle.textContent);
  textarea.textContent = dayText.textContent;
};

export default fillInputDate;
