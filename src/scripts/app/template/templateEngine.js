const templateEngine = (block) => {
  if (block === undefined || block === false || block === null) {
    return document.createTextNode(``);
  }

  if (
    typeof block === `string` ||
    typeof block === `number` ||
    block === true
  ) {
    return document.createTextNode(block);
  }

  if (Array.isArray(block)) {
    const fragment = document.createDocumentFragment();
    block.forEach((item) => {
      const element = templateEngine(item);
      fragment.appendChild(element);
    });
    return fragment;
  }

  const elem = document.createElement(block.tag);

  if (block.cls) {
    elem.classList.add(...[].concat(block.cls).filter(Boolean));
  }

  if (block.attr) {
    const keys = Object.keys(block.attr);
    keys.forEach((key) => {
      elem.setAttribute(key, block.attr[key]);
    });
  }

  const content = templateEngine(block.content);
  elem.appendChild(content);

  return elem;
};

export default templateEngine;
