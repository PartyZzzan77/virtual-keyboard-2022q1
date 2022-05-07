const createCustomElement = (tag, text = "", ...className) => {
  const element = document.createElement(`${tag}`);
  element.textContent = `${text}`;
  element.classList.add(...className);
  return element;
};

export default createCustomElement;
